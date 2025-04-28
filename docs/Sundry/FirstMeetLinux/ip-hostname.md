# ip地址与主机名
## ip地址
### ifconfig:查看本机ip
使用命令`isconfig`可以查看本机的ip地址，如果无法使用则要安装：`yum -y install net-tools`。
```
[miracles@192 ~]$ ifconfig
ens33: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.44.131  netmask 255.255.255.0  broadcast 192.168.44.255
        inet6 fe80::d055:ee50:dfce:fe08  prefixlen 64  scopeid 0x20<link>
        ether 00:0c:29:5e:67:1e  txqueuelen 1000  (Ethernet)
        RX packets 606594  bytes 898402681 (856.7 MiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 61083  bytes 4016433 (3.8 MiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
```

ens33下的inet后面的就是你的ip地址
### 特殊ip
- `127.0.0.1`：指代本机
- `0.0.0.0`：特殊ip地址
  - 指代本机
  - 在端口绑定中用来确定绑定关系
  - 表示所有ip，比如放行规则设置为`0.0.0.0`表示允许任意ip访问。
### 固定ip
虚拟机的Linux的ip是通过DHCP动态获取的，这对于远程连接来说十分不便，所以我们要把它固定下来。
- 使用`vim`编辑`/etc/sysconfig/network-scripts/ifcfg-ens33`，将`BOOTPROTO="dhcp"`改为`BOOTPROTO="static"`，随后在文件末尾写入以下内容：
```
IPADDR="192.168.44.131"
NETMASK="255.255.255.0"
GATEWAY="192.168.44.2"
DNS1="192.168.44.2"
```
:::tip 提示
- 首先进入VMware，单击自己使用的虚拟机，随后单击在上面的选项卡中的“编辑”，选择“虚拟网络编辑器”。
- 单击“VMnet8”，可以看到自己的子网ip和子网掩码，我这里分别是`192.168.44.0`、`255.255.255.0`。
- 单击“NET设置”，可以看到自己的网关ip，我这里是`192.168.44.2`。

现在明白了为什么上面要写入那些数据了吧
:::
- 执行`systemctl restart network`重启网卡，再次查看ip就可以看到自己的固定ip了。
## 主机名
每台电脑除了ip之外，还有一个主机名，使用`hostname`查看。
```
[miracles@192 ~]$ hostname
192.168.44.131
```
哈，我的主机名就是自己的ip。
### 修改主机名
使用`hostnamectl set-hostname 主机名`来修改主机名，这个也需要root。

**有部分操作都是需要root的。执行命令显示没有权限的话，这时root就能解决啦。**
### 域名解析
ip还是很难记忆的，尤其是数据量增大的时候。其实你已经发现了我们平时上网几乎都是直接使用网址，ip却很少使用，我们使用的网址被称之为域名，把域名转换成ip的过程就是域名解析。

当我们使用浏览器访问一个网址的时候，系统会检查`hosts`文件中是否有该网址的ip记录：
- 如果有，则直接打开网站。
- 如果没用，就会联网访问公开的DNS服务器，看看那里有没有记录对应的ip地址，若还是没有那就说明网址不存在。

- Windows`hosts`路径：`C:\Windows\System32\drivers\etc\hosts`
- Linux`hosts`路径：`/ec/hosts`

**这个dns解析很有用的，可以通过修改hosts来实现进入某些网站，比如github。**
:::tip 提示
github的服务器毕竟是在国外，修改hosts后感觉连接也不是很稳定，后来我就直接安装Watt Toolkit了，用它来加速感觉还可以。
:::