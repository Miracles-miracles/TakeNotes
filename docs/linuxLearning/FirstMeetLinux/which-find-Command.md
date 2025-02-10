# 查找命令
## which命令
Linux的命令实际上就是二进制的可执行程序，这个跟Windows的`.exe`文件是一个意思。
which命令就是用来查看一系列命令的程序文件在哪里，它的语法如下：  
`which 要查找的命令`
```
[miracles@192 ~]$ which cd
/usr/bin/cd
[miracles@192 ~]$ which pwd
/usr/bin/pwd
[miracles@192 ~]$ which touch
/usr/bin/touch
[miracles@192 ~]$ which mkdir
/usr/bin/mkdir
[miracles@192 ~]$ which cp
/usr/bin/cp
[miracles@192 ~]$ which mv
/usr/bin/mv
```
<br>

## find命令
find命令用于查找文件，可以按文件名查找，也可以按文件大小查找，也可进行模糊查找。
### 按文件名查找
`find 起始路径 -name "被查找文件名"`
```
[miracles@192 ~]$ su - root
Password: 
Last login: Mon Feb 10 10:13:41 CST 2025 on pts/0
[root@192 ~]# find / -name "test"
find: ‘/run/user/1000/gvfs’: Permission denied
/usr/bin/test
/usr/lib/modules/3.10.0-957.el7.x86_64/kernel/drivers/ntb/test
/usr/lib/alsa/init/test
/usr/lib64/python2.7/test
/usr/lib64/python2.7/unittest/test
/usr/share/espeak-data/voices/test
/usr/src/kernels/3.10.0-957.el7.x86_64/drivers/ntb/test
/usr/src/kernels/3.10.0-957.el7.x86_64/include/config/test
/usr/src/kernels/3.10.0-957.el7.x86_64/lib/raid6/test
```
<br>

### 按大小查找
`find 起始路径 -size +|-n[kMG]`
- `+`、`-`表示大于和小于。
- `n`表示大小数字。
- `kMG`表示大小单位，分别是`kb`、`MB`、`GB`。

### 模糊查找
`find 起始路径 -name "被查找文件名"`

以下是通配符的几个示例：
- `test*`：表示匹配任何以`test`开头的内容。
- `*test`：表示匹配任何以`test`结尾的内容。
- `*test*`：表示匹配任何包含`test`的内容。