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
#### 软链接:Symbolic Link
软链接就是在创造一个独立的文件，这个文件的数据会读取它指向的文件，并且会消耗inode和block。
## 磁盘的分区、格式化、检验与挂载
新建磁盘所需要的动作：
1. 对磁盘进行分区，创建可用分区。
2. 对该分区进行格式化，并创建可用的文件系统。
3. 对创建好的文件系统进行检验
4. 创建挂载点，将该文件系统挂载。
### 检查磁盘分区状态:lsblk/blkid/parted
#### lsblk:列出磁盘列表
`lsblk`，即ls block device，用于列出所有存储设备。  
`lsblk [-dfimpt] [device]`
- `-d`: 仅列出磁盘本身，并不会列出该磁盘的分区数据。
- `-f`: 同时列出该磁盘内的文件系统名称
- `-i`: 使用ASCII的线段输出，不要使用复杂的编码	（再某些环境下很有用）。
- `-m`: 同时输出该设备在/dev下面的权限数据（rwx的数据）
- `-p`: 列出该设备的完整文件名！而不是仅列出最后的名字而已。
- `-t`: 列出该磁盘设备的详细数据，包括磁盘伫列机制、预读写的数据量大小等。
```
[miracles@localhost ~]$ lsblk
NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda      8:0    0   40G  0 disk 
├─sda1   8:1    0  300M  0 part /boot
├─sda2   8:2    0    2G  0 part [SWAP]
└─sda3   8:3    0 37.7G  0 part /
sr0     11:0    1 1024M  0 rom 
```
::: note
从以上可以看出，当前有两个设备：sda和sr0，其中sda有三个分区。
- NAME: 文件名
- MAJ:MIN: 其实核心认识的设备都是通过这两个代码来熟悉的！分别是主要、次要设备代码！
- RM: 是否为可卸载设备 （removable device），如光盘、USB 磁盘等等
- SIZE: 容量
- RO: 是否为只读设备的意思
- TYPE: 是磁盘 （disk）、分区 （partition） 还是只读存储器 （rom） 等输出
- MOUTPOINT: 挂载点
:::
#### blkid:列出设备UUID等参数
UUID是全域单一识别码（universally unique identifier），Linux 会将系统内所有的设备都给予一个独一无二的识别码，这个识别码就可以拿来作为挂载或者是使用这个设备/文件系统之用了。
```
[miracles@localhost ~]$ sudo blkid
/dev/sda1: UUID="b9e6ef6d-d803-49b5-b65e-e1eb6575c167" TYPE="xfs" 
/dev/sda2: UUID="651a65d4-9070-4504-a5b6-ddb5a934e415" TYPE="swap" 
/dev/sda3: UUID="55c9c324-b53f-4863-ad1c-69f582a9397f" TYPE="xfs" 
```
#### parted:列出磁盘的分区信息
使用`parted`命令来输出磁盘的分区类型  
`parted 设备名称 print`
```
[root@localhost dev]# parted /dev/sda print
Model: VMware, VMware Virtual S (scsi)          # 磁盘的模块名称（厂商）
Disk /dev/sda: 42.9GB                           # 磁盘的总容量
Sector size (logical/physical): 512B/512B       # 磁盘的每个逻辑/物理扇区容量
Partition Table: msdos                          # 分区表的格式 （MBR/GPT）
Disk Flags: 

Number  Start   End     Size    Type     File system     Flags      # 下面才是分区数据
 1      1049kB  316MB   315MB   primary  xfs             boot
 2      316MB   2464MB  2149MB  primary  linux-swap(v1)
 3      2464MB  42.9GB  40.5GB  primary  xfs
```
### 磁盘分区:gdisk/fdisk
- MBR分区表使用fdisk分区
- GPT分区表使用gdisk分区
#### gdisk:分区
`gdisk 设备名称`
:::note
分区表信息主要在列出每个分区的个别信息项目：
- Number：分区编号，1 号指的是 /dev/vda1 这样计算。
- Start （sector）：每一个分区的开始扇区号码位置
- End （sector）：每一个分区的结束扇区号码位置，与 start 之间可以算出分区的总容量
- Size：就是分区的容量了
- Code：在分区内的可能的文件系统类型。Linux 为 8300，swap 为 8200。不过这个项目只是一个提示而已，不见得真的代表此分区内的文件系统喔！
- Name：文件系统的名称等等。
:::
#### partprobe:更新分区表信息
`partprobe [-s]`
### 磁盘格式化:mkfs.xfs/mkfs.ext4
#### mkfs.xfs:对xfs文件系统
多数情况下使用默认即可：`mkfs.xfs 设备名`
#### mkfs.ext4:对ext4文件系统
多数情况下使用默认即可：`mkfs.ext4 设备名`
### 文件系统检验:xfs_repair/fsck.ext4
#### xfs_repair:处理xfs文件系统
当有xfs文件系统错乱才需要使用这个指令！  
`xfs_repair [-fnd] 设备名称`
- `-f`：后面的设备其实是个文件而不是实体设备
- `-n`：单纯检查并不修改文件系统的任何数据 （检查而已）
- `-d`：通常用在单人维护模式下面，针对根目录 （/） 进行检查与修复的动作！很危险！不要随便使用。
#### fsck.ext4:处理ext4文件系统
`fsck.ext4 [-pf] [-b superblock] 设备名称`
- `-p`：当文件系统在修复时，若有需要回复 y 的动作时，自动回复 y 来继续进行修复动作。
- `-f`：强制检查！一般来说，如果 fsck 没有发现任何 unclean 的旗标，不会主动进入细部检查的，如果您想要强制 fsck 进入细部检查，就得加上 -f 旗标啰！
- `-D`：针对文件系统下的目录进行最优化配置。
- `-b`：后面接 superblock 的位置！一般来说这个选项用不到。但是如果你的 superblock 因故损毁时，
通过这个参数即可利用文件系统内备份的 superblock 来尝试救援。一般来说，superblock 备份在：
1K block 放在 8193, 2K block 放在 16384, 4K block 放在 32768。
### 文件系统的挂载与卸载
::: important
- 单一文件系统不应该被重复挂载在不同的挂载点（目录）中
- 单一目录不应该重复挂载多个文件系统
- 要作为挂载点的目录，理论上应该都是空目录才是

尤其是上述的后两点！如果你要用来挂载的目录里面并不是空的，那么挂载了文件系统之后，原目录下的东西就会暂时的消失，也就是被隐藏起来了，当新分区被卸载后内容会再次显现。
:::
而要将文件系统挂载到我们的 Linux 系统上，就要使用 mount 这个指令啦！感觉这个指令的操作有点多啊，我就记点常用的。  
`mount 文件系统 挂载点`
- `-a`：将 /etc/fstab 中定义的所有档案系统挂上
- `-o`：
    - ro，rw：挂载文件系统成为只读（ro） 或可读写（rw）。
    - remount：重新挂载，这在系统出错，或重新更新参数时，很有用！
    - auto, noauto：允许此 filesystem 被以`mount -a`自动挂载（auto）

要卸载一个文件系统，就要使用`umount`。  
`umount 文件系统`
### 设置开机挂载:/etc/fstab及/etc/mtab
:::important
- 根目录 / 是必须挂载的﹐而且一定要先于其它 mount point 被挂载进来。
- 其它 mount point 必须为已创建的目录﹐可任意指定﹐但一定要遵守必须的系统目录架构原则 （FHS）。
- 所有 mount point 在同一时间之内﹐只能挂载一次。
- 所有 partition 在同一时间之内﹐只能挂载一次。
- 如若进行卸载﹐您必须先将工作目录移到 mount point（及其子目录） 之外。
:::
