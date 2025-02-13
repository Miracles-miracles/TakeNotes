# 网络请求与下载
## ping命令
使用`ping`可以检查网络服务器是否是可联通状态，语法如下：  
`ping [-c num] ip或主机名`
- `-c`：检查的次数，不使用的话将无限次持续检查。
- `ip或主机名`：被检查服务器的ip或主机名。
```
[miracles@192 ~]$ ping www.bilibili.com
PING a.w.bilicdn1.com (223.111.250.54) 56(84) bytes of data.
64 bytes from 223.111.250.54 (223.111.250.54): icmp_seq=1 ttl=128 time=32.6 ms
64 bytes from 223.111.250.54 (223.111.250.54): icmp_seq=2 ttl=128 time=28.7 ms
64 bytes from 223.111.250.54 (223.111.250.54): icmp_seq=3 ttl=128 time=34.2 ms
64 bytes from 223.111.250.54 (223.111.250.54): icmp_seq=4 ttl=128 time=89.3 ms
^C
--- a.w.bilicdn1.com ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3016ms
rtt min/avg/max/mdev = 28.709/46.223/89.358/24.985 ms
```
## wget命令
`wget`是非交互式的文件加载器，可以在命令行中下载网络文件，语法如下：  
`wget [-b] url`
- `-b`：可选，表示在后台下载，并且将日志写入当前工作目录的wget-log文件。
- `url`：下载连接。
## curl命令
`curl`可以发送http网络请求，可用于下载文件、获取信息等，语法如下：  
`curl [-O] url`
- `-O`：用于下载文件，当`url`是下载链接时，使用该选项保存文件。
- `url`：发起请求的网络地址。

:::note 备注
使用`cip.cc`可以看到ip和地址信息
:::