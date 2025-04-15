# 文件系统的简单操作
## 磁盘与目录的容量
磁盘的整体数据存储在超级区块中，但是每个文件的容量都存储在inode中，可以通过以下几个命令来列出。
### df:列出文件系统的整体磁盘使用量
使用`df`命令可以列出整体磁盘的用量：  
`df	[-ahikHTm] [目录或文件名]`
- `-a`: 列出所有的文件系统，包括系统特有的/proc等文件系统。
- `-k`: 以	KBytes的容量显示各文件系统
- `-m`: 以	MBytes的容量显示各文件系统
- `-h`: 以人们较易阅读的GBytes、MBytes、KBytes等格式自行显示
- `-H`: 以	M=1000K	取代M=1024K的进位方式
- `-T`: 连同该partition的filesystem名称（例如	xfs）也列出
- `-i`: 不用磁盘容量，而以inode的数量来显示
```
[miracles@localhost ~]$ df
Filesystem     1K-blocks    Used Available Use% Mounted on
devtmpfs          481736       0    481736   0% /dev
tmpfs             497728       0    497728   0% /dev/shm
tmpfs             497728    8672    489056   2% /run
tmpfs             497728       0    497728   0% /sys/fs/cgroup
/dev/sda3       39517336 5928136  33589200  16% /
/dev/sda1         303780  189768    114012  63% /boot
tmpfs              99548      24     99524   1% /run/user/1000
```
### du:计算文件大小
`du`命令主要用于计算文件的大小。它通过搜索文件来计算每个文件的大小然后累加，只能看到当前存在的，没有被删除的文件。  
`du	[-ahskm] 文件或目录名称`
- `-a`: 列出所有的文件与目录容量，因为默认仅统计目录下面的文件量而已。
- `-h`: 以人们较易读的容量格式	（G/M）	显示
- `-s`: 列出总量而已，而不列出每个各别的目录占用容量
- `-S`: 不包括子目录下的总计，与-s有点差别。
- `-k`: 以	KBytes列出容量显示
- `-m`: 以	MBytes列出容量显示
```
...
3512	./.cache/tracker
488	./.cache/gstreamer-1.0
0	./.cache/yelp/WebKitCache/Version 12/Blobs
4	./.cache/yelp/WebKitCache/Version 12
4	./.cache/yelp/WebKitCache
4	./.cache/yelp
0	./.cache/flatpak/system-cache
0	./.cache/flatpak
0	./.cache/media-art
0	./.cache/gnome-software/shell-extensions
1540	./.cache/gnome-software/odrs
1540	./.cache/gnome-software
5612	./.cache
4	./.dbus/session-bus
4	./.dbus
0	./.config/imsettings
0	./.config/gnome-session/saved-session
0	./.config/gnome-session
68	./.config/pulse
...
```
### ln:链接
Linux下有两种链接文件：
- 类似Windows的快捷方式，可以让你快速的链接到目标文件（或目录），我们称之为软链接。
- 通过文件系统的inode链接产生新的文件名，**而非新文件**。**这种链接被称为硬链接（hard link）**

可以使用`ln`命令来创建链接：  
`ln	[-sf] 来源文件 目标文件`
- `-s`: 如果不加任何参数就进行链接，那就是hard link，至于-s就是symbolic link。
- `-f`: 如果目标文件存在时，就主动的将目标文件直接移除后再创建。
#### 硬链接:Hard Link
硬链接可以认为是一个指针，指向文件索引节点的指针，系统并不为它重新分配inode。每添加一个一个硬链接，文件的链接数就加1。  
硬连接之间没有主次之分，删除某个硬链接，只是将其从目录的数据块中删除相关信息，并且文件链接数减一。不会从inode表中删除inode,除非只剩下一个链接数。
:::note
硬链接仅能在单一文件系统内进行，不可以跨文件系统。除此之外，还不能硬链接到目录。
:::
### 软链接:Symbolic Link
软链接就是在创造一个独立的文件，这个文件的数据会读取它指向的文件。