<template><div><h1 id="linux的ext2文件系统" tabindex="-1"><a class="header-anchor" href="#linux的ext2文件系统"><span>Linux的ext2文件系统</span></a></h1>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2>
<p>磁盘分区后需要格式化，这样操作系统才能使用这个文件系统。由于每个操作系统所设置的文件属性/权限并不相同，为了存放这些文件的数据，分区需要格式化。</p>
<p>在传统的磁盘和文件系统中，一个分区就只能够被格式化成为一个文件系统，所以说，<strong>一个文件系统就是一个硬盘分区</strong>。有些新技术如LVM可以<strong>将一个分区格式化为多个文件系统</strong>，或者<strong>将多个分区合并称一个文件系统</strong>。</p>
<p>挺绕的。不过，现在一般称<strong>一个可被挂载的数据为一个文件系统而不是一个分区</strong>。</p>
<h2 id="文件系统的运行" tabindex="-1"><a class="header-anchor" href="#文件系统的运行"><span>文件系统的运行</span></a></h2>
<p>一个文件，除了其本身的内容之外，还有属性与权限信息。文件系统会将这两部分内容存放在不同的区块中：</p>
<ul>
<li><strong>权限与属性</strong>存放在<code v-pre>inode</code>中。一个文件占用一个inode，同时记录此文件的数据所在的区块号码。</li>
<li><strong>实际数据</strong>存放在<code v-pre>数据区块</code>中。若文件太大，则占用多个区块。<br>
此外，还有一个<strong>超级区块</strong>(superblock)，它会记录整个文件系统的整体信息，包括inode与数据区块的总量、使用量、剩余量，以及文件系统的格式与相关信息。</li>
</ul>
<p>每个inode和数据块都有编号，且一个文件只占用一个inode，inode内有文件数据放置的区块号码。如果要找文件，就先找文件对应的inode，由此知道文件存放数据的区块号码，这样就能读出文件数据了。
这就是<strong>索引式文件系统</strong>！ext2就是索引式文件系统。</p>
<h2 id="区块群组-group-block" tabindex="-1"><a class="header-anchor" href="#区块群组-group-block"><span>区块群组(group block)</span></a></h2>
<p>当文件系统很大时，inode和数据块全都放在一起根本不容易管理，就好比学校不可能一次性就管理好全部学生一样。那不如每30或者60个学生一个班，每个班配上班主任、课任老师如何？嘿，你还真是个天才！<br>
ext2格式化就会区分多个“区块群组”，每个区块群组都有独立的inode、数据区块、超级区块。每个区块群组都有以下六个内容：</p>
<h3 id="数据区块-data-block" tabindex="-1"><a class="header-anchor" href="#数据区块-data-block"><span>数据区块(data block)</span></a></h3>
<p>用来存储文件数据，ext2文件系统中支持的区块大小为1K、2K和4K三种，在格式化时区块大小就固定了，且每个区块都有编号，以供inode记录。</p>
<div class="hint-container note">
<p class="hint-container-title">Note</p>
<p>查了一下，inode存的是指向区块位置的指针。我说怎么有种熟悉的感觉......</p>
</div>
<p>ext2区块还有如下基本限制：</p>
<ul>
<li>原则上，区块大小和数量在格式化完成就不能再修改了（除非重新格式化）。</li>
<li>每个区块内只能存放一个文件的数据。若文件大于区块的大小，则一个文件会占用多个区块；若文件小于区块，则该区块剩余的空间也不能再使用了（即磁盘空间的浪费）。</li>
</ul>
<div class="hint-container note">
<p class="hint-container-title">Note</p>
<p>比如，我在格式化的时候选择的是4K大小的区块。这时，如果系统中有一个大小为50B的文件需要存储，那么这个文件的数据就会占用一整个4K区块。假设又有一个50B的文件，那么它只能使用一个新的4K区块而不能使用上一个区块剩下的空间。这的确有点浪费。</p>
<p>好在现在磁盘容量都很大的。</p>
</div>
<h3 id="inode-table-inode表" tabindex="-1"><a class="header-anchor" href="#inode-table-inode表"><span>inode table(inode表)</span></a></h3>
<p>inode是用于记录文件属性和权限的，包括以下的内容：</p>
<ul>
<li>该文件的读写属性（read、write、excute）</li>
<li>该文件的拥有者和用户组（owner、group）</li>
<li>该文件的大小</li>
<li>该文件建立或状态改变的时间（ctime）</li>
<li>最近一次读取的时间（atime）</li>
<li>最近修改的时间（mtime）</li>
<li>定义文件特征标识（flag）</li>
<li>该文件真正的内容指向（pointer）</li>
</ul>
<p>与数据区块一样，inode的数量和大小在格式化的时候也固定了。除此之外，inode还有以下特性：</p>
<ul>
<li>每个inode的大小为128B（ext4和xfs可以设置到256B）</li>
<li>每个文件仅占用一个inode。因此，文件系统能够建立的文件数量和inode的数量有关。在系统读取文件时，需要先找到对应的inode，并分析inode记录的权限与用户是否符合，只有符合才可以读取区块内容。</li>
</ul>
<div class="hint-container important">
<p class="hint-container-title">Important</p>
<p>试想一下有一个大小为400MB的文件使用4K区块存储，怎么说也得十万多个区块。对应该文件的inode只有128B，若要存储指向区块的指针（4B），满打满算也才能存储32个块的指针么？<br>
欸嘿，系统自有妙计。</p>
</div>
<p>inode的结构大体上分为两部分，一部分是文件权限/属性的记录区域，另一部分就是用来记录区块位置的区域。后者结构定义如下：</p>
<ul>
<li>12个直接记录区</li>
<li>1个间接记录区</li>
<li>1个双间接记录区</li>
<li>1个三间接记录区</li>
</ul>
<h4 id="直接记录区" tabindex="-1"><a class="header-anchor" href="#直接记录区"><span>直接记录区</span></a></h4>
<p>直接存放指向数据区块的指针，也就是说这12个记录区可以直接取的区块。</p>
<h4 id="间接记录区" tabindex="-1"><a class="header-anchor" href="#间接记录区"><span>间接记录区</span></a></h4>
<p>指向一个区块，但是这个区块中并不存放文件数据，而是用来存放指向其他区块的指针，使用该区块去读取其他存放文件数据的区块。类似指针的指针。</p>
<p>举个例子，假设使用1K区块来存放数据，每个指向区块的指针为4B，那么只需要在inode中存储一个区块的指针，就能实现间接存储了1K/4B=256个区块。</p>
<h4 id="双间接记录区" tabindex="-1"><a class="header-anchor" href="#双间接记录区"><span>双间接记录区</span></a></h4>
<p>原理同上面的间接记录区，这里再向下一层：即使用一个区块存储其他区块的指针，再利用这个指针指向的区块存储其他数据区块。</p>
<p>同样的1K区块和4B指针，这一次：一个区块存储256个指针，每个指针指向的区块又存储其他区块的指针，那就又是256个，也就是一个inode存储了256x256个区块。</p>
<h4 id="三间接记录区" tabindex="-1"><a class="header-anchor" href="#三间接记录区"><span>三间接记录区</span></a></h4>
<p>同样的道理，这一次就来到了256x256x256个区块。<br>
这么算下来，若是使用1K的数据区块，一个inode就能存储一千多万个区块。</p>
<div class="hint-container note">
<p class="hint-container-title">Note</p>
<p>道理是这么个道理，不过区块大小在超过2K后就会受到ext2本身的限制，再去这么算就不对了，不过存储原理是没错的。</p>
</div>
<h3 id="superblock-超级区块" tabindex="-1"><a class="header-anchor" href="#superblock-超级区块"><span>Superblock(超级区块)</span></a></h3>
<p>超级区块记录的是整个文件系统的相关信息，一个超级区块的大小为1024B：</p>
<ul>
<li>数据区块与inode的总量</li>
<li>未使用与已使用的inode与数据区块的数量</li>
<li>数据区块与inode的大小</li>
<li>文件系统的挂载时间、最近一次写入数据的时间、最近一次检验磁盘（fsck）的时间等文件系统信息</li>
<li>一个有效位数值：若此文件系统已被挂载，则有效位为0；否则为1。</li>
</ul>
<p>一个文件系统只有一个超级区块，即在第一个区块群组内含有一个超级区块。若其他区块群组中也有的话，那么主要是第一个群组中超级区块的备份。</p>
<h3 id="filesystem-description-文件系统描述说明" tabindex="-1"><a class="header-anchor" href="#filesystem-description-文件系统描述说明"><span>Filesystem Description(文件系统描述说明)</span></a></h3>
<p>这个区段描述每个区块群组的开始与结束的区块，以及说明每个区段位分别介于哪一个区块之间。</p>
<div class="hint-container note">
<p class="hint-container-title">Note</p>
<p>每个区段指的是：超级区块、对照表、inode对照表、数据区块。</p>
</div>
<h3 id="区块对照表-block-bitmap" tabindex="-1"><a class="header-anchor" href="#区块对照表-block-bitmap"><span>区块对照表(block bitmap)</span></a></h3>
<p>区块对照表用于记录哪些区块是空的，哪些是占用的，方便记录文件数据。</p>
<h3 id="inode对照表-inode-bitmap" tabindex="-1"><a class="header-anchor" href="#inode对照表-inode-bitmap"><span>inode对照表(inode bitmap)</span></a></h3>
<p>和上面的区块对照表一样的，我就不多说了。</p>
<h2 id="dumpe2fs-查询超级区块信息" tabindex="-1"><a class="header-anchor" href="#dumpe2fs-查询超级区块信息"><span>dumpe2fs:查询超级区块信息</span></a></h2>
<p>使用<code v-pre>dumpe2fs</code>命令查询ext系列文件系统的超级区块：<br>
<code v-pre>dumpe2fs -h 设备文件名</code></p>
<ul>
<li><code v-pre>-h</code>：仅列出超级区块的数据，不会列出其他区段的内容。</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">[root@localhost dev]# ls -l | grep sda</span>
<span class="line">brw-rw----. 1 root disk      8,   0 Mar 28 12:11 sda</span>
<span class="line">brw-rw----. 1 root disk      8,   1 Mar 28 12:11 sda1</span>
<span class="line">brw-rw----. 1 root disk      8,   2 Mar 28 12:11 sda2</span>
<span class="line">brw-rw----. 1 root disk      8,   3 Mar 28 12:11 sda3</span>
<span class="line">[root@localhost dev]# dumpe2fs -h sda1</span>
<span class="line">dumpe2fs 1.42.9 (28-Dec-2013)</span>
<span class="line">dumpe2fs: Bad magic number in super-block while trying to open sda1</span>
<span class="line">Couldn't find valid filesystem superblock.</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container note">
<p class="hint-container-title">Note</p>
<p>CentOS7使用xfs文件系统，ext文件系统的命令要能成功那才是邪了。</p>
</div>
<h2 id="目录树" tabindex="-1"><a class="header-anchor" href="#目录树"><span>目录树</span></a></h2>
</div></template>


