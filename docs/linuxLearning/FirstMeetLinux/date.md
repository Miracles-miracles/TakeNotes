# 日期和时区
## date命令:查看时间
通过date命令可以在命令行中查看系统的时间，语法如下：  
`date [-d] [+格式化字符串]`
- `-d`：按照给定的字符串显示日期，一般用于日期计算。
- `格式化字符串`：通过特定的字符串标记来控制显示的日期格式。
  - `%Y`：年
  - `%y`：年份后两位数字
  - `%M`：月份
  - `%d`：日
  - `%H`：小时
  - `%M`：分钟
  - `%S`：秒
  - `%s`：自1970-01-01 00:00:00 UTC到现在的秒数
```
[miracles@192 ~]$ date
Thu Feb 13 09:52:11 CST 2025
```
## 修改时区
首先使用`root`权限，执行以下命令后将时区修改为东八区：  
```
rm -f /etc/localtime
sudo ln -s /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
```
:::info 信息
不过我个人觉得没必要，虽然是Linux系统，但也不是完全都是命令行，修改时间直接使用图形化操作不是更加直观方便吗？
:::
## 自动校准时间
### ntp程序
可以通过`ntp`程序自动校准系统时间，安装`ntp`如下：  
`yum -y install ntp`

**别忘了`root`或者`sudo`，没有`sudo`权限的快去配置哦，在搜索框中搜索“sudo”就能快速找到啦。**

- 启动并设置开机自启：
```
systemctl start ntpd
systemctl enable ntpd
```
- 也可以root后手动校准：
```
[miracles@192 ~]$ sudo ntpdate -u ntp.aliyun.com
13 Feb 10:21:44 ntpdate[10857]: adjust time server 203.107.6.88 offset 0.006528 sec
```