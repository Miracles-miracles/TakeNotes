# 认识root用户
## su命令:切换账户
使用`su - root`可以切换到`root`用户，那是因为`su`命令就是用于账户切换的命令，其来源于**Switch User**，语法如下：  
`su [-] [用户名]`
- `-`符号是可选的，表示是否在切换用户后加载环境变量，**一般建议带上**。
- `用户名`表示要切换到的用户，`用户名`也可以省略，省略的话表示切换到`root`。
- 使用普通用户切换到其他用户需要输入密码，若使用`root`用户则不用。
- 切换用户后，使用`exit`命令退回到上一个用户，也可以使用`ctrl d`。
```
[miracles@192 ~]$ su - root
Password: 
Last login: Mon Feb 10 19:43:26 CST 2025 on pts/1
[root@192 ~]# exit
logout
[miracles@192 ~]$ 
```
<br>

## sudo命令:临时root
虽然可以`root`，但是不建议。不过可以使用`sudo`命令为普通命令授权，临时以`root`身份执行，其语法如下：  
`sudo 其他命令`
- 在其他命令之前带上`sudo`，即可为这条命令临时赋予root权限。
### 为普通用户配置sudo认证
- 切换至root用户，执行`visudo`命令，这样系统会自动通过`vi`编辑器打开`/etc/sudoers`。
- 在文件的最后添加：`miracles ALL=(ALL)   NOPASSWD:ALL`。

**`miracles`是我自己的用户名，你应该写你自己的。**
- 最后使用`wq`保存并退出即可。

完成后就可以无障碍使用`sudo`命令啦。