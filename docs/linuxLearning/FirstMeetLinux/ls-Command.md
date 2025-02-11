## ls命令
ls命令的作用是列出目录下的内容，相当于你双击打开文件夹后看到了其中的内容。其语法细节如下：  
`ls [-a -l -h] [Linux路径]`

- `-a` `-l` `-h`都是可选的选项，每个选项都有自己的作用。
- Linux路径是该命令的可选参数

当不使用选项和参数，直接使用`ls`命令本体时，表示以平铺的形式列出当前目录下的内容。  
```
[miracles@192 ~]$ ls
Desktop    Downloads  Pictures  Templates
Documents  Music      Public    Videos
```  
<br>

## ls命令的选项和参数
- 当`ls`不使用参数时，表示列出当前工作目录的内容，如上面的HOME目录。
- 使用参数，则表示列出指定路径的内容，如`ls /`表示列出根目录的内容。
```
[miracles@192 home]$ ls /
bin   dev  home  lib64  mnt  proc  run   srv  tmp  var
boot  etc  lib   media  opt  root  sbin  sys  usr
```
<br>

- `-a`：使用该选项可以展示所有选项，包括隐藏文件。
- `-l`：以竖向排列的列表形式展示内容。
- `-h`：表示易于阅读的形式列出文件大小，如K、M、G。  

**选项可以组合使用，如：`ls -l-a`、`ls -la`、`ls -al`（三种写法是一样的，表示同时应用`-l`和`-a`的功能）**

**选项也可以和参数混合使用，如：`ls -a -l /`（以竖向列表的形式展示根目录中所有文件，包括隐藏文件）**
```
[miracles@192 home]$ ls -lah /
total 24K
dr-xr-xr-x.  17 root root  224 Jan 24 16:30 .
dr-xr-xr-x.  17 root root  224 Jan 24 16:30 ..
lrwxrwxrwx.   1 root root    7 Jan 24 16:15 bin -> usr/bin
dr-xr-xr-x.   5 root root 4.0K Jan 24 16:31 boot
drwxr-xr-x.  19 root root 3.2K Feb 10 10:02 dev
drwxr-xr-x. 143 root root 8.0K Feb 10 10:18 etc
drwxr-xr-x.   3 root root   22 Jan 24 16:31 home
lrwxrwxrwx.   1 root root    7 Jan 24 16:15 lib -> usr/lib
lrwxrwxrwx.   1 root root    9 Jan 24 16:15 lib64 -> usr/lib64
drwxr-xr-x.   2 root root    6 Apr 11  2018 media
drwxr-xr-x.   2 root root    6 Apr 11  2018 mnt
drwxr-xr-x.   3 root root   16 Jan 24 16:22 opt
dr-xr-xr-x. 207 root root    0 Feb 10 10:01 proc
dr-xr-x---.   4 root root  223 Feb 10 10:18 root
drwxr-xr-x.  41 root root 1.3K Feb 10 10:18 run
lrwxrwxrwx.   1 root root    8 Jan 24 16:15 sbin -> usr/sbin
drwxr-xr-x.   2 root root    6 Apr 11  2018 srv
dr-xr-xr-x.  13 root root    0 Feb 10 10:02 sys
drwxrwxrwt.  17 root root 4.0K Feb 10 10:18 tmp
drwxr-xr-x.  13 root root  155 Jan 24 16:15 usr
drwxr-xr-x.  21 root root 4.0K Jan 24 16:32 var
```
<br>

## HOME目录和工作目录
Linux系统的命令行终端在启动时会默认加载：  
- 当前登录用户的HOME目录作为当前工作目录，则ls命令列出的是HOME目录的内容。
- HOME目录：每个Linux操作用户在Linux系统的个人账户目录的路径是：**/home/用户名**。比如我的就是`/home/miracles`，而且home目录下也只有这一个miracles目录。
```
[miracles@192 ~]$ pwd
/home/miracles
[miracles@192 ~]$ cd ..
[miracles@192 home]$ ls
miracles
```