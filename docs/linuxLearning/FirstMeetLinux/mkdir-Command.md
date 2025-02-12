# mkdir:创建目录(文件夹)
## mkdir命令
mkdir命令可以创建新的目录（文件夹），命令来自**Make Directory**，该命令语法如下：
`mkdir [-p] Linux路径`
- `-p`选项可选，表示自动创建不存在的父目录，适用于创建连续多层级的目录。
- 参数必填，表示Linux路径，即要创建的文件夹的路径，相对路径或绝对路径均可。
```
[miracles@192 ~]$ ls
Desktop    Downloads  Pictures  Templates
Documents  Music      Public    Videos
[miracles@192 ~]$ mkdir test
[miracles@192 ~]$ ls
Desktop    Downloads  Pictures  Templates  Videos
Documents  Music      Public    test
```
```
[miracles@192 ~]$ mkdir -p itcast/good/666
[miracles@192 ~]$ ls
Desktop    Downloads  Music     Public     test
Documents  itcast     Pictures  Templates  Videos
[miracles@192 ~]$ cd itcast/good/666
[miracles@192 666]$ pwd
/home/miracles/itcast/good/666
```
<br>

**创建文件夹需要修改权限，要确保操作在home目录内，不能在home外操作，这涉及到权限问题，在home目录外操作无法成功。**