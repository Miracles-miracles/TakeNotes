## 认知权限信息
```
[miracles@192 ~]$ ls -l
total 4
drwxr-xr-x. 2 miracles miracles  6 Jan 24 16:37 Desktop
drwxr-xr-x. 2 miracles miracles  6 Jan 24 16:37 Documents
drwxr-xr-x. 2 miracles miracles  6 Jan 24 16:37 Downloads
drwxr-xr-x. 2 miracles miracles  6 Jan 24 16:37 Music
drwxr-xr-x. 2 miracles miracles  6 Jan 24 16:37 Pictures
drwxr-xr-x. 2 miracles miracles  6 Jan 24 16:37 Public
drwxr-xr-x. 2 miracles miracles  6 Jan 24 16:37 Templates
-rw-rw-r--. 1 miracles miracles 26 Feb 11 09:55 test.txt
drwxr-xr-x. 2 miracles miracles  6 Jan 24 16:37 Videos
```
在最左侧`.`之前的表示**文件、文件夹的权限控制信息**；随后看到的两个“miracles”，前一个表示**文件、文件夹所属用户**，后一个表示**文件、文件夹所属用户组**。
## 权限控制信息解读
权限控制信息共10个，分为第一个和每3个一组。
- 第一个：或`-`或`d`或`l`，分别表示文件、文件夹和软链接。
- 后面九个：每三个一组，分别是所属用户权限、所属用户组权限、其他用户权限。
## rwx解读
- `r`：读权限
  - 针对文件夹，可以查看文件夹内容，如`ls`命令。
- `w`：写权限
  - 针对文件夹，可以在文件夹内创建、删除、改名等。
- `x`：执行权限
  - 针对文件夹，可以更改工作目录到此文件夹，即`cd`进入。