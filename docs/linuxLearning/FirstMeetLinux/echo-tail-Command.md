# echo、tail与重定向符
## echo命令:输出
echo命令可以在命令行中输出指定内容，有点像C语言的`printf`，其语法如下：  
`echo 输出的内容`
- 无需选项，只有一个参数，表示要输出的内容，复杂内容可以使用`""`来包围内容。
```
[miracles@192 ~]$ echo "Hello Linux"
Hello Linux
```
- 使用飘号，可以把包围的内容作为命令来执行。
```
[miracles@192 ~]$ echo pwd
pwd
[miracles@192 ~]$ echo `pwd`
/home/miracles
```
<br>

## tail命令:跟踪
tail命令可以查看文件尾部的内容，用于跟踪文件的最新更改，语法如下：  
`tail [-f -num] Linux路径`
- `-f`：表示持续跟踪。
- `-num`：表示查看尾部多少行，不填的话默认10行。
- `Linux路径`：顾名思义，表示被跟踪文件的路径。
<br>

## 重定向符：`>`和`>>`
- `>`：将左侧命令的结果**覆盖**写入到符号右侧指定的文件中。
- `>>`：将左侧命令的结果**追加**写入到符号右侧指定的文件中。
```
[miracles@192 ~]$ ls
Desktop    Downloads  Pictures  Templates  Videos
Documents  Music      Public    test.txt
[miracles@192 ~]$ cat test.txt
itheima is a brand of itcast.
itcast stock code is 00302.
[miracles@192 ~]$ echo "hello linux" > test.txt
[miracles@192 ~]$ cat test.txt
hello linux
[miracles@192 ~]$ echo "hello windows" >> test.txt
[miracles@192 ~]$ cat test.txt
hello linux
hello windows
```