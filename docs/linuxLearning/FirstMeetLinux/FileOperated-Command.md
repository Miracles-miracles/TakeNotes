## touch命令
touch命令用于创建**文件**而不是**文件夹（目录）**，该命令语法如下：  
`touch Linux路径`
- touch命令无选项，参数必填，表示要创建的文件路径，相对、绝对、特殊路径符均可使用。
```
[miracles@192 ~]$ ls
Desktop    Downloads  Music     Public     test
Documents  itcast     Pictures  Templates  Videos
[miracles@192 ~]$ cd test
[miracles@192 test]$ touch hello.txt
[miracles@192 test]$ ls
hello.txt
```
<br>

## cat命令
cat命令用于查看文件内容，现在查看刚才创建的`hello.txt`文件：
```
[miracles@192 test]$ cat hello.txt
[miracles@192 test]$ 
```
可以看到，这个文件里面什么都没有。接下来，我将在文件中写入`Hello Linux`，然后再用`cat`查看。
```
[miracles@192 test]$ cat hello.txt
Hello Linux
```
<br>

## more命令
more命令也可以查看文件内容，但是于`cat`不同的是：
- `cat`是直接将内容全部显示出来。
- `more`支持翻页，如果文件内容过多，可以一页页地展示。  
语法：`more Linux路径`
- 该命令没有选项，只有必填参数，参数表示被查看的文件路径，相对、绝对、特殊路径符都可以使用。
<br>

## cp命令
cp命令用于复制文件/文件夹，该命令源于**copy**，其语法如下：  
`cp [-r] 参数1 参数2`
- `-r`：选项可选，用于复制文件夹使用，表示递归。
- `参数1`：Linux路径，表示被复制的文件夹或文件。
- `参数2`：Linux路径，表示要复制去的地方。

现在我要把test文件夹中的hello.txt文件复制到itcast文件夹中。
```
[miracles@192 ~]$ cp test/hello.txt itcast
[miracles@192 ~]$ ls itcast
good  hello.txt
[miracles@192 ~]$ cat itcast/hello.txt
Hello Linux
[miracles@192 ~]$ cat test/hello.txt
Hello Linux
```
<br>

## mv命令
mv命令用于移动文件/文件夹，该命令来自**move**，语法如下：  
`mv 参数1 参数`
- `参数1`：Linux路径，表示被移动的文件或文件夹。
- `参数2`：Linux路径，表示要去的地方。如果目标不存在，则改名确保目标存在。

接下来，我要把itcast文件夹中的good文件夹移动到test文件夹中。
```
[miracles@192 ~]$ mv itcast/good test
[miracles@192 ~]$ cd itcast
[miracles@192 itcast]$ ls
hello.txt
[miracles@192 itcast]$ cd
[miracles@192 ~]$ cd test
[miracles@192 test]$ ls
good  hello.txt
[miracles@192 test]$ ls good
666
```
<br>

## rm命令
rm命令用于删除文件/文件夹，该命令来自**remove**，语法如下：  
`rm [-r -f] 参数1 参数2 ...... 参数N`
- `-r`：该选项用于删除文件夹。
- `-f`：表示**force**，即强制性的删除。
- `参数1 参数2 ...... 参数N`：表示要删除的文件或文件夹路径，按照空格隔开。  

现在我要删除test和itcast文件夹。
```
[miracles@192 ~]$ ls
Desktop    Downloads  Music     Public     test
Documents  itcast     Pictures  Templates  Videos
[miracles@192 ~]$ rm -r test itcast
[miracles@192 ~]$ ls
Desktop    Downloads  Pictures  Templates
Documents  Music      Public    Videos
```
<br>

## 通配符
通配符`*`可以配合`rm`命令一起使用，以此来进行模糊删除。下面是几个示例：
- `test*`：表示匹配任何以`test`开头的内容。
- `*test`：表示匹配任何以`test`结尾的内容。
- `*test*`：表示匹配任何包含`test`的内容。

**开管理员谨慎使用`rm -rf /*`，小心去局子里喝茶。**
