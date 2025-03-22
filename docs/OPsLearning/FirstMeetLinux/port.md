# 端口
端口是设备与外界通讯交流的出入口，分为：
- 物理端口：可见的端口，如USB接口等。
- 虚拟端口：指计算机内部的端口，是不可见的，是用来操作系统和外部进行交互使用的。
:::info 相关信息
为什么要使用虚拟端口呢？

使用ip只能确定计算机，但是计算机运行着很多的程序，这是仅使用ip所无法确定的。

通过端口可以锁定计算机上的具体程序，确保程序之间进行沟通。
:::
关于端口，我们还需要了解：
- 公认端口：1~1023，系统内置或知名程序预留，非特殊不占用。
- 注册端口：1024~49151，随意使用，松散绑定程序或服务。
- 动态端口：49152~65535，临时使用。
## nmap命令:查看端口占用
使用`nmap`来查看端口占用，不过要先安装该命令，命令语法如下：  
`nmap 被查看的ip地址`
```
[miracles@192 ~]$ nmap 127.0.0.1

Starting Nmap 6.40 ( http://nmap.org ) at 2025-02-13 20:44 CST
Nmap scan report for localhost (127.0.0.1)
Host is up (0.0018s latency).
Not shown: 996 closed ports
PORT     STATE SERVICE
22/tcp   open  ssh
111/tcp  open  rpcbind
631/tcp  open  ipp
6000/tcp open  X11

Nmap done: 1 IP address (1 host up) scanned in 0.20 seconds
```
:::tip 小提示
`127.0.0.1`是代表本机哦
:::
## netstat命令:查看指定端口
使用前要先安装该命令，命令语法如下：  
`netstat -anp | gerp 端口号`
```
[miracles@192 ~]$ netstat -anp | grep 6000
(Not all processes could be identified, non-owned process info
 will not be shown, you would have to be root to see it all.)
tcp        0      0 0.0.0.0:6000            0.0.0.0:*               LISTEN      -                   
tcp6       0      0 :::6000                 :::*                    LISTEN      -                   
```