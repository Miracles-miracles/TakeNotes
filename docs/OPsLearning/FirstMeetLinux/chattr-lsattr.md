# chattr-lsattr:文件隐藏属性
文件隐藏属性，很厉害的，只有root用户使用特殊命令才可操作。一旦生效，若不撤回该属性，即使是root用户也无法越权操作。
## 配置文件隐藏属性
使用`chattr`命令就可以实现配置文件的隐藏属性，以下是常用选项：  
`chattr [+-=][选项] 文件或目录名称`
- `+`：增加某一个特殊参数，其他原本存在的参数则不动。
- `-`：删除某一个特殊参数，其他原本存在的参数则不动。
- `=`：直接设置参数，且仅有后面接的参数。
- `a`：**当设置这个参数后，该文件只能增加数据，不能删除和修改，需要root才可设置。**
- `i`：**当设置这个参数后，该文件不能被删除、改名、设置链接、写入或新增数据，相当于把这个文件锁起来了，也需要root才可设置。**
- `c`：自动将文件压缩，在读取的时候解压缩，在存储的时候会先压缩再存储。
- `d`：当`dump`程序被执行的时候，该文件（或目录）不会被`dump`备份。
- `s`：**当文件被设置为该属性时，如果文件被删除，那么它会从磁盘中完全消失，且完全无法恢复。**
- `u`：**若文件设置该属性，假使文件被删除了，但是数据内容仍然在磁盘中，可以用来使用恢复该文件。**
- `A`：在存取文件或目录时，它的存取时间atime不会被修改。
- `S`：当对文件进行修改时，该“修改”同时也会存入磁盘。
```
[root@localhost miracles]# ls
Desktop    Downloads  Pictures  Templates  Videos
Documents  Music      Public    test
[root@localhost miracles]# chattr +i test
[root@localhost miracles]# rm test
rm: remove regular empty file ‘test’? y
rm: cannot remove ‘test’: Operation not permitted
[root@localhost miracles]# rm -f test
rm: cannot remove ‘test’: Operation not permitted
[root@localhost miracles]# chattr -i test
[root@localhost miracles]# rm test
rm: remove regular empty file ‘test’? y
[root@localhost miracles]# ls
Desktop  Documents  Downloads  Music  Pictures  Public  Templates  Videos
```
## 显示文件隐藏属性
使用`lsattr`命令来查看文件隐藏属性：  
`lsattr [-a -d -R] 文件或目录`
- `a`：将隐藏的文件属性也显示出来
- `d`：如果参数是目录，则仅列出目录本身的属性而不是其内部的文件。
- `R`：连同子目录的属性一并显示出来
```
[root@localhost miracles]# ls
Desktop    Downloads  Pictures  Templates  Videos
Documents  Music      Public    test
[root@localhost miracles]# lsattr
---------------- ./Desktop
---------------- ./Downloads
---------------- ./Templates
---------------- ./Public
---------------- ./Documents
---------------- ./Music
---------------- ./Pictures
---------------- ./Videos
----i----------- ./test
[root@localhost miracles]# chattr -i test
[root@localhost miracles]# lsattr
---------------- ./Desktop
---------------- ./Downloads
---------------- ./Templates
---------------- ./Public
---------------- ./Documents
---------------- ./Music
---------------- ./Pictures
---------------- ./Videos
---------------- ./test
```
