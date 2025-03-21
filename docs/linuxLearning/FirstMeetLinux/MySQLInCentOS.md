# 在CentOS上安装MySQL
## 安装
### 配置yum仓库  
- 更新密钥
使用`rpm --import`来导入密钥，MySQL最新GPG-KEY在其官方仓库中：[https://repo.mysql.com](https://repo.mysql.com)。  
`rpm --import https://repo.mysql.com/RPM-GPG-KEY-mysql-2023`  
输入完改命令直接回车即可

- 配置MySQL yum源
`rpm -Uvh http://repo.mysql.com/mysql80-community-release-el7-11.noarch.rpm`  
`rpm`后面的链接就是下载rpm包的地方，也就是在上面repo网站中的文件链接：[https://repo.mysql.com](https://repo.mysql.com)。这里选择的是社区发行版，而且建议选择带有`noarch`的，因为noarch软件包不依赖于特定的CPU指令集，因此可以在任何平台上安装和使用。
:::note
我这里用的是CentOS7，选择`el9`的时候报错缺少依赖项，但是选择`el7`就没事了。
```
[root@localhost ~]# rpm -Uvh http://repo.mysql.com/mysql84-community-release-el9-1.noarch.rpm
Retrieving http://repo.mysql.com/mysql84-community-release-el9-1.noarch.rpm
error: Failed dependencies:
	rpmlib(PayloadIsZstd) <= 5.4.18-1 is needed by mysql84-community-release-el9-1.noarch
```
:::
输入命令回车后回显示：
```
[root@localhost ~]# rpm -Uvh http://repo.mysql.com/mysql80-community-release-el7-11.noarch.rpm
Retrieving http://repo.mysql.com/mysql80-community-release-el7-11.noarch.rpm
warning: /var/tmp/rpm-tmp.dmOHmG: Header V4 RSA/SHA256 Signature, key ID 3a79bd29: NOKEY
Preparing...                          ################################# [100%]
Updating / installing...
   1:mysql80-community-release-el7-11 ################################# [100%]
```

### 使用yum命令安装MySQL  
执行`yum -y install mysql-community-server`，下载速度视网络情况而定，一般几分钟就够了。

### 设置开机自启动  
MySQL安装后会自动配置为`mysqld`的服务，可以使用`systemctl`来管理。  
使用`systemctl start mysqld`来实现启动MySQL（启动需要几十秒，需耐心等待）  
使用`systemctl enable mysqld`来实现开机自启动  
使用`systemctl status mysqld`开查看运行状态
```
[root@localhost ~]# systemctl status mysqld
● mysqld.service - MySQL Server
   Loaded: loaded (/usr/lib/systemd/system/mysqld.service; enabled; vendor preset: disabled)
   Active: active (running) since Fri 2025-03-21 20:14:13 CST; 2min 29s ago
     Docs: man:mysqld(8)
           http://dev.mysql.com/doc/refman/en/using-systemd.html
 Main PID: 11417 (mysqld)
   Status: "Server is operational"
   CGroup: /system.slice/mysqld.service
           └─11417 /usr/sbin/mysqld

Mar 21 20:13:39 localhost.localdomain systemd[1]: Starting MySQL Server...
Mar 21 20:14:13 localhost.localdomain systemd[1]: Started MySQL Server.
```
这样就算是成功了！
## 配置
这部分主要是配置管理员用户root的密码和允许远程登录的权限

### 获取MySQL的初始密码  
MySQL的日志文件存储在`mysqld.log`文件中，具体路径是`/var/log/mysqld.log`，其中存储着名为`temporary pass word`的初始密码，使用`grep`过滤即可，具体命令如下：  
`cat /var/log/mysqld.log | grep "temporary password"`  
选中并复制初始密码

### 登录MySQL数据库系统  
使用密码登录root：`mysql -uroot -p`
```
[root@localhost log]# mysql -uroot -p
Enter password: 
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 8
Server version: 8.0.41

Copyright (c) 2000, 2025, Oracle and/or its affiliates.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql>
```

### 修改root用户密码  
`ALTER USER 'root'@'localhost' IDENTIFIED BY '密码';`
:::tip
注意一点，MySQL的命令很多时候在结尾都有`;`，这和Linux命令是很好的区分点。
:::
```
mysql> ALTER USER 'root'@'localhost' IDENTIFIED BY '123456';
ERROR 1819 (HY000): Your password does not satisfy the current policy requirements
```
:::note
密码要求比较严格，要求大于8位的带有大小写、数字和特殊符号
:::
当你设置完正确的密码之后就会出现`Query OK, 0 rows affected (0.06 sec)`的字样

### 更改密码配置  
当数据库只是用于学习用途时，可以将密码设置的简单一些，这时需要修改一下密码的配置才能做到。不过我更推荐使用正规密码，不管是用于工作还是学习，这是一种意识的培养，就像支持正版的版权意识一样。
- 降低密码的安全级别，将密码安全级别设置为“LOW”  
`set global validate_password_policy=LOW;`
- 密码长度最低降至4位  
`set global validate_password_length=4;`
- 重复上面修改密码的命令  
`ALTER USER 'root'@'localhost' IDENTIFIED BY '密码';`

现在就可以使用简单密码了，比如纯数字的“123456”之类的。

### 配置root运行远程登录
