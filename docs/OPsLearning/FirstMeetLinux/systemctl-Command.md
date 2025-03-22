# systemctl命令:控制
Linux很多软件均支持`sysemctl`命令控制启动、停止、开机自启，能被`systemctl`管理的软件一般被称为：服务。其语法如下：  
`systemctl start | stop | status | enable | disable 服务名`
- `start`：启动
- `stop`：关闭
- `status`：查看状态
- `enable`：开启开机自启
- `disable`：关闭开机自启

系统内置的服务比较多，如：
- NetworkManager：主网络服务
- network：副网络服务
- firewalld：防火墙服务
- sshd，ssh服务