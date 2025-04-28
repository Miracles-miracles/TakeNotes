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
<h3 id="检查磁盘分区状态" tabindex="-1"><a class="header-anchor" href="#检查磁盘分区状态"><span>检查磁盘分区状态</span></a></h3>
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
</div></template>


