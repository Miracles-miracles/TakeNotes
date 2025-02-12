# cd-pwd:目录切换
## cd命令
cd命令用于切换工作目录，命令来源自英文**Change Directory**，该命令语法如下：  
`cd [Linux路径]`
- cd命令无需选项，只有参数，表示要切换到哪个目录。
- cd命令直接执行，不写参数，表示回到用户的HOME目录。
```
[miracles@192 ~]$ cd /
[miracles@192 /]$ ls
bin   dev  home  lib64  mnt  proc  run   srv  tmp  var
boot  etc  lib   media  opt  root  sbin  sys  usr
[miracles@192 /]$ cd
[miracles@192 ~]$ ls
Desktop    Downloads  Pictures  Templates
Documents  Music      Public    Videos
```
<br>

## pwd命令
pwd命令用于查看当前目录，命令来自**Print Work Directory**，该命令语法如下：  
`pwd`
- pwd命令无选项、无参数，直接输入pwd即可。
```
[miracles@192 ~]$ pwd
/home/miracles
[miracles@192 ~]$ cd /
[miracles@192 /]$ pwd
/
```