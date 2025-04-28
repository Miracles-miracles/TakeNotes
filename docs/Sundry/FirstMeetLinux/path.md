# 路径
## 相对路径和绝对路径
- 绝对路径：以根目录为起点，路径描述以`/`开头。
```
[miracles@192 /]$ cd /home/miracles/Desktop
[miracles@192 Desktop]$ pwd
/home/miracles/Desktop
```
- 相对路径：以当前目录为起点，路径描述无需以`/`开头。
```
[miracles@192 ~]$ ls
Desktop    Downloads  Pictures  Templates
Documents  Music      Public    Videos
[miracles@192 ~]$ cd Desktop
[miracles@192 Desktop]$ pwd
/home/miracles/Desktop
```
<br>

## 特殊路径符
- `.`：表示当前目录。如`cd ./Desktop`表示切换到当前目录下的Desktop目录内，和`cd Desktop`效果一致。
```
[miracles@192 ~]$ cd ./Desktop
[miracles@192 Desktop]$ pwd
/home/miracles/Desktop
[miracles@192 Desktop]$ cd
[miracles@192 ~]$ cd Desktop
[miracles@192 Desktop]$ pwd
/home/miracles/Desktop
```
- `..`：表示上一级目录。如`cd ..`即可切换到上一级目录，`cd ../..`切换到上二级目录。
```
[miracles@192 Desktop]$ cd ..
[miracles@192 ~]$ pwd
/home/miracles
[miracles@192 ~]$ cd Desktop
[miracles@192 Desktop]$ cd ../..
[miracles@192 home]$ pwd
/home
```
- `~`：表示HOME目录。比如`cd ~`即可切换到HOME目录，`cd ~/Desktop`则是切换到HOME内的Desktop目录。
```
[miracles@192 ~]$ cd ~/Desktop
[miracles@192 Desktop]$ pwd
/home/miracles/Desktop
[miracles@192 Desktop]$ cd ~
[miracles@192 ~]$ pwd
/home/miracles
```