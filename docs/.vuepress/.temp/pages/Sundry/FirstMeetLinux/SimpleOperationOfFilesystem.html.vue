<template><div><h1 id="文件系统的简单操作" tabindex="-1"><a class="header-anchor" href="#文件系统的简单操作"><span>文件系统的简单操作</span></a></h1>
<h2 id="磁盘与目录的容量" tabindex="-1"><a class="header-anchor" href="#磁盘与目录的容量"><span>磁盘与目录的容量</span></a></h2>
<p>磁盘的整体数据存储在超级区块中，但是每个文件的容量都存储在inode中，可以通过以下几个命令来列出。</p>
<h3 id="df-列出文件系统的整体磁盘使用量" tabindex="-1"><a class="header-anchor" href="#df-列出文件系统的整体磁盘使用量"><span>df:列出文件系统的整体磁盘使用量</span></a></h3>
<p>使用<code v-pre>df</code>命令可以列出整体磁盘的用量：<br>
<code v-pre>df	[-ahikHTm] [目录或文件名]</code></p>
<ul>
<li><code v-pre>-a</code>: 列出所有的文件系统，包括系统特有的/proc等文件系统。</li>
<li><code v-pre>-k</code>: 以	KBytes的容量显示各文件系统</li>
<li><code v-pre>-m</code>: 以	MBytes的容量显示各文件系统</li>
<li><code v-pre>-h</code>: 以人们较易阅读的GBytes、MBytes、KBytes等格式自行显示</li>
<li><code v-pre>-H</code>: 以	M=1000K	取代M=1024K的进位方式</li>
<li><code v-pre>-T</code>: 连同该partition的filesystem名称（例如	xfs）也列出</li>
<li><code v-pre>-i</code>: 不用磁盘容量，而以inode的数量来显示</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">[miracles@localhost ~]$ df</span>
<span class="line">Filesystem     1K-blocks    Used Available Use% Mounted on</span>
<span class="line">devtmpfs          481736       0    481736   0% /dev</span>
<span class="line">tmpfs             497728       0    497728   0% /dev/shm</span>
<span class="line">tmpfs             497728    8672    489056   2% /run</span>
<span class="line">tmpfs             497728       0    497728   0% /sys/fs/cgroup</span>
<span class="line">/dev/sda3       39517336 5928136  33589200  16% /</span>
<span class="line">/dev/sda1         303780  189768    114012  63% /boot</span>
<span class="line">tmpfs              99548      24     99524   1% /run/user/1000</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="du-计算文件大小" tabindex="-1"><a class="header-anchor" href="#du-计算文件大小"><span>du:计算文件大小</span></a></h3>
<p><code v-pre>du</code>命令主要用于计算文件的大小。它通过搜索文件来计算每个文件的大小然后累加，只能看到当前存在的，没有被删除的文件。<br>
<code v-pre>du	[-ahskm] 文件或目录名称</code></p>
<ul>
<li><code v-pre>-a</code>: 列出所有的文件与目录容量，因为默认仅统计目录下面的文件量而已。</li>
<li><code v-pre>-h</code>: 以人们较易读的容量格式	（G/M）	显示</li>
<li><code v-pre>-s</code>: 列出总量而已，而不列出每个各别的目录占用容量</li>
<li><code v-pre>-S</code>: 不包括子目录下的总计，与-s有点差别。</li>
<li><code v-pre>-k</code>: 以	KBytes列出容量显示</li>
<li><code v-pre>-m</code>: 以	MBytes列出容量显示</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">...</span>
<span class="line">3512	./.cache/tracker</span>
<span class="line">488	./.cache/gstreamer-1.0</span>
<span class="line">0	./.cache/yelp/WebKitCache/Version 12/Blobs</span>
<span class="line">4	./.cache/yelp/WebKitCache/Version 12</span>
<span class="line">4	./.cache/yelp/WebKitCache</span>
<span class="line">4	./.cache/yelp</span>
<span class="line">0	./.cache/flatpak/system-cache</span>
<span class="line">0	./.cache/flatpak</span>
<span class="line">0	./.cache/media-art</span>
<span class="line">0	./.cache/gnome-software/shell-extensions</span>
<span class="line">1540	./.cache/gnome-software/odrs</span>
<span class="line">1540	./.cache/gnome-software</span>
<span class="line">5612	./.cache</span>
<span class="line">4	./.dbus/session-bus</span>
<span class="line">4	./.dbus</span>
<span class="line">0	./.config/imsettings</span>
<span class="line">0	./.config/gnome-session/saved-session</span>
<span class="line">0	./.config/gnome-session</span>
<span class="line">68	./.config/pulse</span>
<span class="line">...</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ln-链接" tabindex="-1"><a class="header-anchor" href="#ln-链接"><span>ln:链接</span></a></h3>
<p>Linux下有两种链接文件：</p>
<ul>
<li>类似Windows的快捷方式，可以让你快速的链接到目标文件（或目录），我们称之为软链接。</li>
<li>通过文件系统的inode链接产生新的文件名，<strong>而非新文件</strong>。<strong>这种链接被称为硬链接（hard link）</strong></li>
</ul>
<p>可以使用<code v-pre>ln</code>命令来创建链接：<br>
<code v-pre>ln	[-sf] 来源文件 目标文件</code></p>
<ul>
<li><code v-pre>-s</code>: 如果不加任何参数就进行链接，那就是hard link，至于-s就是symbolic link。</li>
<li><code v-pre>-f</code>: 如果目标文件存在时，就主动的将目标文件直接移除后再创建。</li>
</ul>
<h4 id="硬链接-hard-link" tabindex="-1"><a class="header-anchor" href="#硬链接-hard-link"><span>硬链接:Hard Link</span></a></h4>
<p>硬链接可以认为是一个指针，指向文件索引节点的指针，系统并不为它重新分配inode。每添加一个一个硬链接，文件的链接数就加1。<br>
硬连接之间没有主次之分，删除某个硬链接，只是将其从目录的数据块中删除相关信息，并且文件链接数减一。不会从inode表中删除inode,除非只剩下一个链接数。</p>
<div class="hint-container note">
<p class="hint-container-title">Note</p>
<p>硬链接仅能在单一文件系统内进行，不可以跨文件系统。除此之外，还不能硬链接到目录。</p>
</div>
<h4 id="软链接-symbolic-link" tabindex="-1"><a class="header-anchor" href="#软链接-symbolic-link"><span>软链接:Symbolic Link</span></a></h4>
<p>软链接就是在创造一个独立的文件，这个文件的数据会读取它指向的文件，并且会消耗inode和block。</p>
<h2 id="磁盘的分区、格式化、检验与挂载" tabindex="-1"><a class="header-anchor" href="#磁盘的分区、格式化、检验与挂载"><span>磁盘的分区、格式化、检验与挂载</span></a></h2>
<p>新建磁盘所需要的动作：</p>
<ol>
<li>对磁盘进行分区，创建可用分区。</li>
<li>对该分区进行格式化，并创建可用的文件系统。</li>
<li>对创建好的文件系统进行检验</li>
<li>创建挂载点，将该文件系统挂载。</li>
</ol>
<h3 id="检查磁盘分区状态-lsblk-blkid-parted" tabindex="-1"><a class="header-anchor" href="#检查磁盘分区状态-lsblk-blkid-parted"><span>检查磁盘分区状态:lsblk/blkid/parted</span></a></h3>
<h4 id="lsblk-列出磁盘列表" tabindex="-1"><a class="header-anchor" href="#lsblk-列出磁盘列表"><span>lsblk:列出磁盘列表</span></a></h4>
<p><code v-pre>lsblk</code>，即ls block device，用于列出所有存储设备。<br>
<code v-pre>lsblk [-dfimpt] [device]</code></p>
<ul>
<li><code v-pre>-d</code>: 仅列出磁盘本身，并不会列出该磁盘的分区数据。</li>
<li><code v-pre>-f</code>: 同时列出该磁盘内的文件系统名称</li>
<li><code v-pre>-i</code>: 使用ASCII的线段输出，不要使用复杂的编码	（再某些环境下很有用）。</li>
<li><code v-pre>-m</code>: 同时输出该设备在/dev下面的权限数据（rwx的数据）</li>
<li><code v-pre>-p</code>: 列出该设备的完整文件名！而不是仅列出最后的名字而已。</li>
<li><code v-pre>-t</code>: 列出该磁盘设备的详细数据，包括磁盘伫列机制、预读写的数据量大小等。</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">[miracles@localhost ~]$ lsblk</span>
<span class="line">NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT</span>
<span class="line">sda      8:0    0   40G  0 disk </span>
<span class="line">├─sda1   8:1    0  300M  0 part /boot</span>
<span class="line">├─sda2   8:2    0    2G  0 part [SWAP]</span>
<span class="line">└─sda3   8:3    0 37.7G  0 part /</span>
<span class="line">sr0     11:0    1 1024M  0 rom </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container note">
<p class="hint-container-title">Note</p>
<p>从以上可以看出，当前有两个设备：sda和sr0，其中sda有三个分区。</p>
<ul>
<li>NAME: 文件名</li>
<li>MAJ:MIN: 其实核心认识的设备都是通过这两个代码来熟悉的！分别是主要、次要设备代码！</li>
<li>RM: 是否为可卸载设备 （removable device），如光盘、USB 磁盘等等</li>
<li>SIZE: 容量</li>
<li>RO: 是否为只读设备的意思</li>
<li>TYPE: 是磁盘 （disk）、分区 （partition） 还是只读存储器 （rom） 等输出</li>
<li>MOUTPOINT: 挂载点</li>
</ul>
</div>
<h4 id="blkid-列出设备uuid等参数" tabindex="-1"><a class="header-anchor" href="#blkid-列出设备uuid等参数"><span>blkid:列出设备UUID等参数</span></a></h4>
<p>UUID是全域单一识别码（universally unique identifier），Linux 会将系统内所有的设备都给予一个独一无二的识别码，这个识别码就可以拿来作为挂载或者是使用这个设备/文件系统之用了。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">[miracles@localhost ~]$ sudo blkid</span>
<span class="line">/dev/sda1: UUID="b9e6ef6d-d803-49b5-b65e-e1eb6575c167" TYPE="xfs" </span>
<span class="line">/dev/sda2: UUID="651a65d4-9070-4504-a5b6-ddb5a934e415" TYPE="swap" </span>
<span class="line">/dev/sda3: UUID="55c9c324-b53f-4863-ad1c-69f582a9397f" TYPE="xfs" </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="parted-列出磁盘的分区信息" tabindex="-1"><a class="header-anchor" href="#parted-列出磁盘的分区信息"><span>parted:列出磁盘的分区信息</span></a></h4>
<p>使用<code v-pre>parted</code>命令来输出磁盘的分区类型<br>
<code v-pre>parted 设备名称 print</code></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">[root@localhost dev]# parted /dev/sda print</span>
<span class="line">Model: VMware, VMware Virtual S (scsi)          # 磁盘的模块名称（厂商）</span>
<span class="line">Disk /dev/sda: 42.9GB                           # 磁盘的总容量</span>
<span class="line">Sector size (logical/physical): 512B/512B       # 磁盘的每个逻辑/物理扇区容量</span>
<span class="line">Partition Table: msdos                          # 分区表的格式 （MBR/GPT）</span>
<span class="line">Disk Flags: </span>
<span class="line"></span>
<span class="line">Number  Start   End     Size    Type     File system     Flags      # 下面才是分区数据</span>
<span class="line"> 1      1049kB  316MB   315MB   primary  xfs             boot</span>
<span class="line"> 2      316MB   2464MB  2149MB  primary  linux-swap(v1)</span>
<span class="line"> 3      2464MB  42.9GB  40.5GB  primary  xfs</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="磁盘分区-gdisk-fdisk" tabindex="-1"><a class="header-anchor" href="#磁盘分区-gdisk-fdisk"><span>磁盘分区:gdisk/fdisk</span></a></h3>
<ul>
<li>MBR分区表使用fdisk分区</li>
<li>GPT分区表使用gdisk分区</li>
</ul>
<h4 id="gdisk-分区" tabindex="-1"><a class="header-anchor" href="#gdisk-分区"><span>gdisk:分区</span></a></h4>
<p><code v-pre>gdisk 设备名称</code></p>
<div class="hint-container note">
<p class="hint-container-title">Note</p>
<p>分区表信息主要在列出每个分区的个别信息项目：</p>
<ul>
<li>Number：分区编号，1 号指的是 /dev/vda1 这样计算。</li>
<li>Start （sector）：每一个分区的开始扇区号码位置</li>
<li>End （sector）：每一个分区的结束扇区号码位置，与 start 之间可以算出分区的总容量</li>
<li>Size：就是分区的容量了</li>
<li>Code：在分区内的可能的文件系统类型。Linux 为 8300，swap 为 8200。不过这个项目只是一个提示而已，不见得真的代表此分区内的文件系统喔！</li>
<li>Name：文件系统的名称等等。</li>
</ul>
</div>
<h4 id="partprobe-更新分区表信息" tabindex="-1"><a class="header-anchor" href="#partprobe-更新分区表信息"><span>partprobe:更新分区表信息</span></a></h4>
<p><code v-pre>partprobe [-s]</code></p>
<h3 id="磁盘格式化-mkfs-xfs-mkfs-ext4" tabindex="-1"><a class="header-anchor" href="#磁盘格式化-mkfs-xfs-mkfs-ext4"><span>磁盘格式化:mkfs.xfs/mkfs.ext4</span></a></h3>
<h4 id="mkfs-xfs-对xfs文件系统" tabindex="-1"><a class="header-anchor" href="#mkfs-xfs-对xfs文件系统"><span>mkfs.xfs:对xfs文件系统</span></a></h4>
<p>多数情况下使用默认即可：<code v-pre>mkfs.xfs 设备名</code></p>
<h4 id="mkfs-ext4-对ext4文件系统" tabindex="-1"><a class="header-anchor" href="#mkfs-ext4-对ext4文件系统"><span>mkfs.ext4:对ext4文件系统</span></a></h4>
<p>多数情况下使用默认即可：<code v-pre>mkfs.ext4 设备名</code></p>
<h3 id="文件系统检验-xfs-repair-fsck-ext4" tabindex="-1"><a class="header-anchor" href="#文件系统检验-xfs-repair-fsck-ext4"><span>文件系统检验:xfs_repair/fsck.ext4</span></a></h3>
<h4 id="xfs-repair-处理xfs文件系统" tabindex="-1"><a class="header-anchor" href="#xfs-repair-处理xfs文件系统"><span>xfs_repair:处理xfs文件系统</span></a></h4>
<p>当有xfs文件系统错乱才需要使用这个指令！<br>
<code v-pre>xfs_repair [-fnd] 设备名称</code></p>
<ul>
<li><code v-pre>-f</code>：后面的设备其实是个文件而不是实体设备</li>
<li><code v-pre>-n</code>：单纯检查并不修改文件系统的任何数据 （检查而已）</li>
<li><code v-pre>-d</code>：通常用在单人维护模式下面，针对根目录 （/） 进行检查与修复的动作！很危险！不要随便使用。</li>
</ul>
<h4 id="fsck-ext4-处理ext4文件系统" tabindex="-1"><a class="header-anchor" href="#fsck-ext4-处理ext4文件系统"><span>fsck.ext4:处理ext4文件系统</span></a></h4>
<p><code v-pre>fsck.ext4 [-pf] [-b superblock] 设备名称</code></p>
<ul>
<li><code v-pre>-p</code>：当文件系统在修复时，若有需要回复 y 的动作时，自动回复 y 来继续进行修复动作。</li>
<li><code v-pre>-f</code>：强制检查！一般来说，如果 fsck 没有发现任何 unclean 的旗标，不会主动进入细部检查的，如果您想要强制 fsck 进入细部检查，就得加上 -f 旗标啰！</li>
<li><code v-pre>-D</code>：针对文件系统下的目录进行最优化配置。</li>
<li><code v-pre>-b</code>：后面接 superblock 的位置！一般来说这个选项用不到。但是如果你的 superblock 因故损毁时，
通过这个参数即可利用文件系统内备份的 superblock 来尝试救援。一般来说，superblock 备份在：
1K block 放在 8193, 2K block 放在 16384, 4K block 放在 32768。</li>
</ul>
<h3 id="文件系统的挂载与卸载" tabindex="-1"><a class="header-anchor" href="#文件系统的挂载与卸载"><span>文件系统的挂载与卸载</span></a></h3>
<div class="hint-container important">
<p class="hint-container-title">Important</p>
<ul>
<li>单一文件系统不应该被重复挂载在不同的挂载点（目录）中</li>
<li>单一目录不应该重复挂载多个文件系统</li>
<li>要作为挂载点的目录，理论上应该都是空目录才是</li>
</ul>
<p>尤其是上述的后两点！如果你要用来挂载的目录里面并不是空的，那么挂载了文件系统之后，原目录下的东西就会暂时的消失，也就是被隐藏起来了，当新分区被卸载后内容会再次显现。</p>
</div>
<p>而要将文件系统挂载到我们的 Linux 系统上，就要使用 mount 这个指令啦！感觉这个指令的操作有点多啊，我就记点常用的。<br>
<code v-pre>mount 文件系统 挂载点</code></p>
<ul>
<li><code v-pre>-a</code>：将 /etc/fstab 中定义的所有档案系统挂上</li>
<li><code v-pre>-o</code>：
<ul>
<li>ro，rw：挂载文件系统成为只读（ro） 或可读写（rw）。</li>
<li>remount：重新挂载，这在系统出错，或重新更新参数时，很有用！</li>
<li>auto, noauto：允许此 filesystem 被以<code v-pre>mount -a</code>自动挂载（auto）</li>
</ul>
</li>
</ul>
<p>要卸载一个文件系统，就要使用<code v-pre>umount</code>。<br>
<code v-pre>umount 文件系统</code></p>
<h3 id="设置开机挂载-etc-fstab及-etc-mtab" tabindex="-1"><a class="header-anchor" href="#设置开机挂载-etc-fstab及-etc-mtab"><span>设置开机挂载:/etc/fstab及/etc/mtab</span></a></h3>
<div class="hint-container important">
<p class="hint-container-title">Important</p>
<ul>
<li>根目录 / 是必须挂载的﹐而且一定要先于其它 mount point 被挂载进来。</li>
<li>其它 mount point 必须为已创建的目录﹐可任意指定﹐但一定要遵守必须的系统目录架构原则 （FHS）。</li>
<li>所有 mount point 在同一时间之内﹐只能挂载一次。</li>
<li>所有 partition 在同一时间之内﹐只能挂载一次。</li>
<li>如若进行卸载﹐您必须先将工作目录移到 mount point（及其子目录） 之外。</li>
</ul>
</div>
</div></template>


