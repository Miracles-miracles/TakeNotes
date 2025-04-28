# 在Ubuntu上安装MySQL
使用`cat /proc/version`查看Ubuntu版本，我的是24.04，应该有内置的MySQL 8.0，直接通过apt安装即可。
```
miracles@192:~$ cat /proc/version
Linux version 6.8.0-52-generic (buildd@lcy02-amd64-046) (x86_64-linux-gnu-gcc-13 (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0, GNU ld (GNU Binutils for Ubuntu) 2.42) #53-Ubuntu SMP PREEMPT_DYNAMIC Sat Jan 11 00:06:25 UTC 2025
```
## 安装
### 更新apt仓库信息
`apt update`  
直接回车即可
### 安装MySQL
`apt install -y mysql-server`  
等待一小会儿即可安装成功
### 启动MySQL
与CentOS不同，这里需要手动启动。  
`/etc/init.d/mysql start`
:::note
视频里的Ubuntu版本是22.04，安装MySQL后需手动启动。我的24.04在安装后是自动启动的，查看状态即可知道。  
我将Ubuntu虚拟机关机后再开机，发现MySQL甚至是开机自启动的，这就省事多了。
:::
- 查看状态
`/etc/init.d/mysql status`
### 登录MySQL
直接使用`mysql`
### 设置密码
`ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '密码';`
:::tip
在Ubuntu中的MySQL密码竟然是不受拘束的任意，也就是安全级别很低的纯数字密码都是可以的。那我可就“123456”了。
:::
### 对MySQL进行初始化
:::important
这里要先退出MySQL，在Ubuntu中运行该命令。
:::
`mysql_secure_installation`  
回车后输入密码，提示是否要增强密码安全性、是否更改root密码、是否移除匿名用户、是否禁止远程登录、是否移除自带的测试数据库、是否刷新权限。  
这里选择：
- 不需要，回车
- 不更改，回车
- 移除，输入y，回车
- 不禁止，回车
- 不删除，回车
- 刷新，输入y，回车
### 重新登录
这时登录就需要输入密码了，和在CentOS中登录的命令一样。