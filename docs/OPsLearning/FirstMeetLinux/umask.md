# umask:文件默认权限
我们可以修改一个文件或目录的属性，但是不知道一个文件或目录在创建时的“默认权限”，而`umask`就是指定目前用户和用户组在建立文件或目录时的默认权限值。
## 查看默认权限
查看默认权限有以下两种方式:  
- 直接使用`umask`命令，以数字形式显示权限值。
```
[miracles@localhost ~]$ umask
0002
```
:::note
权限值一般是三组数字，可是这里有四组，为什么？  
这是因为第一组是特殊权限用的，可以先不管它，直接看后三组。
:::
:::important
`umask`的数字指的是该默认值需要减掉的权限，也就是把这个权限拿走，剩下的才是真正的默认权限。  
由于`r--4 w--2 x--1`，那么`002`就表示用户什么也没拿走，用户组也是，其他用户拿走`2--w`即写权限。  
也就是说`u=rwx g=rwx o=rx`
看看和下面的`umask -S`能不能对上吧
:::
- 使用命令+选项：`umask -S`，以符号形式显示权限。
```
[miracles@localhost ~]$ umask -S
u=rwx,g=rwx,o=rx
```
:::note
很显然，`u=rwx,g=rwx,o=rx`和上面的`775`是对应的。
:::
## 修改默认权限
如何重新设置默认权限呢？只需要输入`umask`然后加上权限数字即可。
```
[miracles@localhost ~]$ umask
0002
[miracles@localhost ~]$ umask 022
[miracles@localhost ~]$ umask
0022
[miracles@localhost ~]$ umask 002
[miracles@localhost ~]$ umask
0002
```