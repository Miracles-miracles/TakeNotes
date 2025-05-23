# Linux的文件系统
## 前言
磁盘分区后需要格式化，这样操作系统才能使用这个文件系统。由于每个操作系统所设置的文件属性/权限并不相同，为了存放这些文件的数据，分区需要格式化。

在传统的磁盘和文件系统中，一个分区就只能够被格式化成为一个文件系统，所以说，**一个文件系统就是一个硬盘分区**。有些新技术如LVM可以**将一个分区格式化为多个文件系统**，或者**将多个分区合并称一个文件系统**。

挺绕的。不过，现在一般称**一个可被挂载的数据为一个文件系统而不是一个分区**。
## 文件系统的运行
一个文件，除了其本身的内容之外，还有属性与权限信息。文件系统会将这两部分内容存放在不同的区块中：
- **权限与属性**存放在`inode`中。一个文件占用一个inode，同时记录此文件的数据所在的区块号码。
- **实际数据**存放在`数据区块`中。若文件太大，则占用多个区块。  
此外，还有一个**超级区块**(superblock)，它会记录整个文件系统的整体信息，包括inode与数据区块的总量、使用量、剩余量，以及文件系统的格式与相关信息。

每个inode和数据块都有编号，且一个文件只占用一个inode，inode内有文件数据放置的区块号码。如果要找文件，就先找文件对应的inode，由此知道文件存放数据的区块号码，这样就能读出文件数据了。
这就是**索引式文件系统**！ext2就是索引式文件系统。
## 区块群组(group block)
当文件系统很大时，inode和数据块全都放在一起根本不容易管理，就好比学校不可能一次性就管理好全部学生一样。那不如每30或者60个学生一个班，每个班配上班主任、课任老师如何？嘿，你还真是个天才！  
ext2格式化就会区分多个“区块群组”，每个区块群组都有独立的inode、数据区块、超级区块。每个区块群组都有以下六个内容：
### 数据区块(data block)
用来存储文件数据，ext2文件系统中支持的区块大小为1K、2K和4K三种，在格式化时区块大小就固定了，且每个区块都有编号，以供inode记录。  
:::note
查了一下，inode存的是指向区块位置的指针。我说怎么有种熟悉的感觉......
:::
ext2区块还有如下基本限制：
- 原则上，区块大小和数量在格式化完成就不能再修改了（除非重新格式化）。
- 每个区块内只能存放一个文件的数据。若文件大于区块的大小，则一个文件会占用多个区块；若文件小于区块，则该区块剩余的空间也不能再使用了（即磁盘空间的浪费）。
:::note
比如，我在格式化的时候选择的是4K大小的区块。这时，如果系统中有一个大小为50B的文件需要存储，那么这个文件的数据就会占用一整个4K区块。假设又有一个50B的文件，那么它只能使用一个新的4K区块而不能使用上一个区块剩下的空间。这的确有点浪费。

好在现在磁盘容量都很大的。
:::
### inode table(inode表)
inode是用于记录文件属性和权限的，包括以下的内容：
- 该文件的读写属性（read、write、excute）
- 该文件的拥有者和用户组（owner、group）
- 该文件的大小
- 该文件建立或状态改变的时间（ctime）
- 最近一次读取的时间（atime）
- 最近修改的时间（mtime）
- 定义文件特征标识（flag）
- 该文件真正的内容指向（pointer）

与数据区块一样，inode的数量和大小在格式化的时候也固定了。除此之外，inode还有以下特性：
- 每个inode的大小为128B（ext4和xfs可以设置到256B）
- 每个文件仅占用一个inode。因此，文件系统能够建立的文件数量和inode的数量有关。在系统读取文件时，需要先找到对应的inode，并分析inode记录的权限与用户是否符合，只有符合才可以读取区块内容。
:::important
试想一下有一个大小为400MB的文件使用4K区块存储，怎么说也得十万多个区块。对应该文件的inode只有128B，若要存储指向区块的指针（4B），满打满算也才能存储32个块的指针么？  
欸嘿，系统自有妙计。
:::
inode的结构大体上分为两部分，一部分是文件权限/属性的记录区域，另一部分就是用来记录区块位置的区域。后者结构定义如下：
- 12个直接记录区
- 1个间接记录区
- 1个双间接记录区
- 1个三间接记录区
#### 直接记录区
直接存放指向数据区块的指针，也就是说这12个记录区可以直接取的区块。
#### 间接记录区
指向一个区块，但是这个区块中并不存放文件数据，而是用来存放指向其他区块的指针，使用该区块去读取其他存放文件数据的区块。类似指针的指针。

举个例子，假设使用1K区块来存放数据，每个指向区块的指针为4B，那么只需要在inode中存储一个区块的指针，就能实现间接存储了1K/4B=256个区块。
#### 双间接记录区
原理同上面的间接记录区，这里再向下一层：即使用一个区块存储其他区块的指针，再利用这个指针指向的区块存储其他数据区块。

同样的1K区块和4B指针，这一次：一个区块存储256个指针，每个指针指向的区块又存储其他区块的指针，那就又是256个，也就是一个inode存储了256x256个区块。
#### 三间接记录区
同样的道理，这一次就来到了256x256x256个区块。  
这么算下来，若是使用1K的数据区块，一个inode就能存储一千多万个区块。
:::note
道理是这么个道理，不过区块大小在超过2K后就会受到ext2本身的限制，再去这么算就不对了，不过存储原理是没错的。
:::
### Superblock(超级区块)
超级区块记录的是整个文件系统的相关信息，一个超级区块的大小为1024B：
- 数据区块与inode的总量
- 未使用与已使用的inode与数据区块的数量
- 数据区块与inode的大小
- 文件系统的挂载时间、最近一次写入数据的时间、最近一次检验磁盘（fsck）的时间等文件系统信息
- 一个有效位数值：若此文件系统已被挂载，则有效位为0；否则为1。

一个文件系统只有一个超级区块，即在第一个区块群组内含有一个超级区块。若其他区块群组中也有的话，那么主要是第一个群组中超级区块的备份。
### Filesystem Description(文件系统描述说明)
这个区段描述每个区块群组的开始与结束的区块，以及说明每个区段位分别介于哪一个区块之间。
:::note
每个区段指的是：超级区块、对照表、inode对照表、数据区块。
:::
### 区块对照表(block bitmap)
区块对照表用于记录哪些区块是空的，哪些是占用的，方便记录文件数据。
### inode对照表(inode bitmap)
和上面的区块对照表一样的，我就不多说了。
## dumpe2fs:查询超级区块信息
使用`dumpe2fs`命令查询ext系列文件系统的超级区块：  
`dumpe2fs -h 设备文件名`  
- `-h`：仅列出超级区块的数据，不会列出其他区段的内容。
```
[root@localhost dev]# ls -l | grep sda
brw-rw----. 1 root disk      8,   0 Mar 28 12:11 sda
brw-rw----. 1 root disk      8,   1 Mar 28 12:11 sda1
brw-rw----. 1 root disk      8,   2 Mar 28 12:11 sda2
brw-rw----. 1 root disk      8,   3 Mar 28 12:11 sda3
[root@localhost dev]# dumpe2fs -h sda1
dumpe2fs 1.42.9 (28-Dec-2013)
dumpe2fs: Bad magic number in super-block while trying to open sda1
Couldn't find valid filesystem superblock.
```
:::note
CentOS7使用xfs文件系统，ext文件系统的命令要能成功那才是邪了。
:::
## 目录树
### 目录
当我们在Linux下的文件系统中建立一个目录的时候，文件系统会分配一个inode和至少一个区块给它。其中，inode中记录着有关该目录的权限和属性，并且记录分配到那块区块的号码。文件的区块记录的是文件中的数据信息，而目录的区块记录的则是目录下的文件名和该文件分配的inode号码。
#### ls -i:查看inode号码
使用`ls -i`命令可以查看目录内的文件占用的inode号码
:::note
若是想单纯看目录本身的inode号码，可以使用`ls -di`，因为`-d`选项的意思是：仅展示目录本身而不是它的内容
```
[miracles@localhost ~]$ ls -i test
2376535 test1.txt
[miracles@localhost ~]$ ls -di test
848713 test
```
:::
### 文件
当我们在ext系列文件系统下建立一个文件时，文件系统会分配一个inode和响应大小的区块数量给文件。  
假设文件系统使用的是4K区块，我要建立一个100KB的文件，此时系统会分配一个inode和25个区块。不过呢，inode只有12个直接记录区，这显然是不够的，还需要一个区块实现间接记录。
### 目录树读取
inode本身不记录文件名，文件名记录在目录的区块中。  
要读取某个文件时，首先经过目录的inode和区块，通过目录区块找到该文件的inode，最后才会读取文件区块中的数据。

目录树是从根目录开始读取，系统可以通过挂载的信息找到挂载点的inode号码，此时就能得到根目录inode内容。现在以读取`/ect/passwd`为例说明：  
```
[miracles@localhost /]$ ls -dil / /etc /etc/passwd
      64 dr-xr-xr-x.  17 root root  224 Feb 12 11:49 /
33554497 drwxr-xr-x. 143 root root 8192 Mar 31 22:22 /etc
35030797 -rw-r--r--.   1 root root 2369 Mar 21 20:05 /etc/passwd
```
1. 通过挂载点找到64号inode，且权限可以让我们读取内容。
2. 既得根目录`/`的inode，其中指向的区块中存储着目录下`etc/`目录的inode号码：33554497。
3. 读取33554497号inode得知用户权限，可以访问`etc/`区块内容。
4. 从`etc/`区块中得知`passwd`文件对应的inode号码为：35030797。
5. 读取35030797号inode得知用户权限可以读取`passwd`区块内容。
6. 最后读取区块数据。
## ext文件系统的文件存取和日志式文件系统
### 新建行为
区块对照表/inode对照表中存有区块和inode的状态信息，即哪些已经被使用，哪些没有被使用。当新建一个文件或目录时文件系统行为如下：
1. 首先确认使用者权限
2. 查看inode bitmap中是否有未使用的inode，将属性/权限写入。
3. 查看block bitmap中是否有未使用的block，将文件数据写入，更新inode中指向block的数据。
4. 数据更新至对照表和超级区块中。
:::note
假设只有写入数据完成了，但是由于特殊情况同步数据没有完成怎么办？也就是说，inode和block已被占用，但是bitmap中却没有记载，还是显示未占用。这种矛盾情况就由下面的日志式文件系统来解决。
:::
### 日志式文件系统
在文件系统中划分出一个区块，用来专门记录或写入文件修改的步骤：
1. 当系统要写入一个文件时，会在日志记录区块中准备要写入的信息。
2. 开始写入文件的权限和数据，并更新对照表。
3. 在日志记录区块中完成对该文件的记录
## XFS文件系统简介
xfs文件系统在数据分布上主要分为以三个部分：数据区、文件系统登录活动区、实时运行区。
### 数据区（data section）
与ext文件系统的区块群组类似，只不过inode和区块是动态生成，并非在格式化时就固定的。
### 文件登录活动区（log section）
用以记录文件系统的变化，类似日志区块，甚至可以指定外部磁盘作为xfs系统的日志区块。
### 实时运行区（realtime section）
当文件被创建时，首先会被系统写入该区块的一个或多个extent中，然后再写入数据区的inode和block中。该区域大小在格式化时就被指定。
### xfs_info:查看xfs文件系统
首先使用命令`df -T`查看文件系统类型，毕竟这个只能查看xfs文件系统。
```
[miracles@localhost ~]$ df -T
Filesystem     Type     1K-blocks    Used Available Use% Mounted on
/dev/sda3      xfs       39517336 6015436  33501900  16% /
devtmpfs       devtmpfs    482152       0    482152   0% /dev
tmpfs          tmpfs       497944       0    497944   0% /dev/shm
tmpfs          tmpfs       497944    8716    489228   2% /run
tmpfs          tmpfs       497944       0    497944   0% /sys/fs/cgroup
/dev/sda1      xfs         303780  149528    154252  50% /boot
tmpfs          tmpfs        99592       4     99588   1% /run/user/42
tmpfs          tmpfs        99592      24     99568   1% /run/user/1000
```
可以看到`/dev/sda1`是xfs类型的文件系统，接下来使用`xfs_info`来查看它的数据。
```
[miracles@localhost ~]$ xfs_info /dev/sda1
meta-data=/dev/sda1              isize=512    agcount=4, agsize=19200 blks
         =                       sectsz=512   attr=2, projid32bit=1
         =                       crc=1        finobt=0 spinodes=0
data     =                       bsize=4096   blocks=76800, imaxpct=25
         =                       sunit=0      swidth=0 blks
naming   =version 2              bsize=4096   ascii-ci=0 ftype=1
log      =internal               bsize=4096   blocks=855, version=2
         =                       sectsz=512   sunit=0 blks, lazy-count=1
realtime =none                   extsz=4096   blocks=0, rtextents=0
```