# chmod-chown:修改权限与所属
## chmod命令
chmod命令可以修改文件、文件夹的权限信息，**不过，只有文件、文件夹的所属用户或root用户可以修改**。语法如下：  
`chmod [-R] 权限 文件或文件夹`
- `-R`：对文件夹内的全部内容应用同样的操作。
- `权限`：即`rwx`，分别为用户、用户组和其他用户单独设定，如`u=rwx,g=rx,o=x`。
```
[miracles@192 ~]$ ls -l test.txt
-rw-rw-r--. 1 miracles miracles 26 Feb 11 09:55 test.txt
[miracles@192 ~]$ chmod o=rw test.txt
[miracles@192 ~]$ ls -l test.txt
-rw-rw-rw-. 1 miracles miracles 26 Feb 11 09:55 test.txt
```
这里我把test.txt文件其他用户的权限从`r--`改成了`rw-`。
### 权限的数字序号
权限可以用3位数字代表，第一位数字表示用户权限，第二位表示用户组权限，第三位表示其他用户权限。

数字的细节如下：`r`记为4，`w`记为2，`x`记为1，可以有：
- 0：无任何权限，即`---`。
- 1：仅有`x`权限，即`--x`。
- 2：仅有`w`权限，即`-w-`。
- 3：有`w`和`x`权限，即`-wx`。
- 4：仅有`r`权限，即`r--`。
- 5：有`r`和`x`权限，即`r-x`。
- 6：有`r`和`w`权限，即`rw-`。
- 7：有全部权限，即`rwx`。
## chown命令
chown命令可以修改文件、文件夹的所属用户和用户组，**不过，普通用户无法修改所属为其他用户或组，所以此命令只适用于root用户执行**。语法如下：  
`chown [-R] [用户][:][用户组] 文件或文件夹`
- `-R`：对文件夹内的全部内容应用同样的操作。
- `用户`：修改所属用户。
- `:`：用于分隔用户和用户组。
- `用户组`：修改所属用户组。
```
[miracles@192 ~]$ ls -l test.txt
-rw-rw-rw-. 1 miracles miracles 26 Feb 11 09:55 test.txt
[miracles@192 ~]$ chown :root test.txt
chown: changing group of ‘test.txt’: Operation not permitted
[miracles@192 ~]$ sudo chown :root test.txt
[miracles@192 ~]$ ls -l test.txt
-rw-rw-rw-. 1 miracles root 26 Feb 11 09:55 test.txt
```
这里我把所属组从miracles改成root了。