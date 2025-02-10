# grep、wc与管道符
## grep命令
grep命令用于从文件中通过关键字过滤文件行，语法如下：  
`grep [-n] 关键字 文件路径`
- `-n`：可选，表示在结果中显示匹配的行号。
- `关键字`：必填，表示过滤的关键字，带有空格或其他特殊符号，建议使用`""`将关键字包围起来。
- `文件路径`：必填，表示要过滤内容的文件路径，可作为输入端口。

现在我将使用`touch`命令在HOME目录创建一个`test.txt`文件，并输入一些内容，然后使用命令过滤关键字“it”。
```
[miracles@192 ~]$ grep -n "it" test.txt
1:itheima is a brand of itcast.
2:itcast stock code is 00302.
```
<br>

## wc命令
wc命令用于统计文件的行数、单词数量等，不同选项具有不同效果，语法如下：  
`wc [-c -m -l -w] 文件路径`
- `-c`：统计bytes（字节）数量。
- `-m`：统计字符数量。
- `-l`：统计行数。
- `-w`：统计单词数量。
- `文件路径`：被统计的文件，作为内容输入口。

以刚才的`test.txt`为例演示一下：
```
[miracles@192 ~]$ cat test.txt
itheima is a brand of itcast.
itcast stock code is 00302.
[miracles@192 ~]$ wc -c test.txt
58 test.txt
[miracles@192 ~]$ wc -m test.txt
58 test.txt
[miracles@192 ~]$ wc -l test.txt
2 test.txt
[miracles@192 ~]$ wc -w test.txt
11 test.txt
```
<br>

## 管道符
管道符`|`可以将其左边的命令作为右边命令的输入，可以进行嵌套使用。下面我将举个例子：
```
[miracles@192 ~]$ cd /etc/sysconfig/network-scripts
[miracles@192 network-scripts]$ ls -l | grep ifcfg
-rw-r--r--. 1 root root   403 Feb 10 10:17 ifcfg-ens33
-rw-r--r--. 1 root root   254 Aug 24  2018 ifcfg-lo
[miracles@192 network-scripts]$ ls
ifcfg-ens33    ifdown-Team      ifup-post
ifcfg-lo       ifdown-TeamPort  ifup-ppp
ifdown         ifdown-tunnel    ifup-routes
ifdown-bnep    ifup             ifup-sit
ifdown-eth     ifup-aliases     ifup-Team
ifdown-ib      ifup-bnep        ifup-TeamPort
ifdown-ippp    ifup-eth         ifup-tunnel
ifdown-ipv6    ifup-ib          ifup-wireless
ifdown-isdn    ifup-ippp        init.ipv6-global
ifdown-post    ifup-ipv6        network-functions
ifdown-ppp     ifup-isdn        network-functions-ipv6
ifdown-routes  ifup-plip
ifdown-sit     ifup-plusb
```