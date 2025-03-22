# 主机状态
## top命令:查看资源占用
通过`top`查看CPU、内存使用情况，默认5秒刷新一次，语法：  
`top`  
直接输入即可，按`q`或`ctrl c`退出
```
[miracles@192 ~]$ top
top - 10:39:14 up 18 min,  2 users,  load average: 0.00, 0.06, 0.20
Tasks: 189 total,   1 running, 188 sleeping,   0 stopped,   0 zombie
%Cpu(s):  0.0 us,  0.0 sy,  0.0 ni,100.0 id,  0.0 wa,  0.0 hi,  0.0 si,  0.0 st
KiB Mem :   995892 total,    66948 free,   569504 used,   359440 buff/cache
KiB Swap:  2098172 total,  2062580 free,    35592 used.   216160 avail Mem 

   PID USER      PR  NI    VIRT    RES    SHR S %CPU %MEM     TIME+ COMMAND                      
  7054 root      20   0  573824  12192   1020 S  6.2  1.2   0:00.59 tuned                        
  8911 miracles  20   0  162012   2192   1544 R  6.2  0.2   0:00.01 top                          
     1 root      20   0  193804   4316   2448 S  0.0  0.4   0:03.75 systemd                      
     2 root      20   0       0      0      0 S  0.0  0.0   0:00.00 kthreadd                     
     3 root      20   0       0      0      0 S  0.0  0.0   0:00.26 ksoftirqd/0                  
     5 root       0 -20       0      0      0 S  0.0  0.0   0:00.00 kworker/0:0H                 
     7 root      rt   0       0      0      0 S  0.0  0.0   0:00.00 migration/0                  
     8 root      20   0       0      0      0 S  0.0  0.0   0:00.00 rcu_bh                       
     9 root      20   0       0      0      0 S  0.0  0.0   0:01.08 rcu_sched                    
    10 root       0 -20       0      0      0 S  0.0  0.0   0:00.00 lru-add-drain                
    11 root      rt   0       0      0      0 S  0.0  0.0   0:00.01 watchdog/0                   
    13 root      20   0       0      0      0 S  0.0  0.0   0:00.00 kdevtmpfs                    
    14 root       0 -20       0      0      0 S  0.0  0.0   0:00.00 netns                        
    15 root      20   0       0      0      0 S  0.0  0.0   0:00.00 khungtaskd                   
    16 root       0 -20       0      0      0 S  0.0  0.0   0:00.00 writeback                    
    17 root       0 -20       0      0      0 S  0.0  0.0   0:00.00 kintegrityd                  
    18 root       0 -20       0      0      0 S  0.0  0.0   0:00.00 bioset                       
    19 root       0 -20       0      0      0 S  0.0  0.0   0:00.00 bioset                       
    20 root       0 -20       0      0      0 S  0.0  0.0   0:00.00 bioset
```
:::info 解释
- 第一行：
  - `top`：命令名称
  - `10:39:14`：当前系统时间
  - `up 18 min`：启动了1分钟
  - `2 users`：2个用户登录
  - `load average: 0.00, 0.06, 0.20`：1、5、15分钟负载
- 第二行
  - `Tasks: 189 total`：189个进程
  - `1 running`：1个进程在运行
  - `188 sleeping`：188个进程休眠
  - `0 stopped`：0个停止进程
  - `0 zombie`：0个僵尸进程
- 第三行
  - `%Cpu(s)`：CPU使用率
  - `0.0 us`：用户CPU使用率为0.0%
  - ` 0.0 sy`：系统CPU使用率为0.0%
  - `0.0 ni`：高优先级进程占用CPU时间百分比为0.0%
  - `100.0 id`：空闲CPU率为100.0%
  - `0.0 wa`：IO等待CPU占用率为0.0%
  - `0.0 hi`：CPU硬件中断率为0.0%
  - `0.0 si`：CPU软件中断率为0.0%
  - `0.0 st`：强制等待占用CPU率
- 第四行：
  - `KiB Mem`：物理内存
  - `total`：总量
  - `free`：空闲
  - `used`：使用
  - `buff/cache`：buff/cache占用
- 第五行：
  - `KiB Swap`：虚拟内存（交换空间）
  - `total`：总量
  - `free`：空闲
  - `used`：使用
  - `buff/cache`：buff/cache占用
:::
### top命令内容详解
- PID：进程id
- USER：进程所属用户
- PR：进程优先级，越小越高
- NI：负值表示高优先级，正值表示低优先级
- VIRT：进程使用虚拟内存，单位KB。
- RES：进程使用物理内存，单位KB。
- SHR：进程使用共享内存，单位KB。
- S：进程状态
  - S：休眠
  - R：运行
  - Z：僵死状态
  - N：负数优先级
  - I：空闲状态
- %CPU：进程占用CPU率
- %MEM：进程占用内存率
- TIME+：进程使用CPU时间总计，单位10毫秒。
- COMMAND：进程的命令或名称或程序文件路径
### top命令选项
- `-p`：只显示某个进程的信息
- `-d`：设置刷新时间，默认是5秒。
- `-c`：显示产生进程的完整命令，默认是进程名。
- `-n`：指定刷新次数，比如`top -n 3`表示刷新输出3次后退出。
- `-b`：以非交互非全屏模式运行，以批次的方式执行`top`，一般配合`-n`指定输出几次统计信息，将输出重新向到指定文件，比如`top -b -n 3 > /tmp/top.tmp`。
- `-i`：不显示任何闲置(idle)或无用(zombie)的进程
- `-u`：查找特定用户启动的进程
### top交互选项
当`top`以交互式运行时，可以使用以下交互命令：
- `h键`：显示帮助画面
- `c键`：显示产生进程的完整命令，等同于`-c`参数，再次按下时变为默认显示。
- `f键`：可以选择需要展示的项目
- `M键`：根据驻留内存大小(RES)排序
- `P键`：根据CPU使用百分比大小进行排序
- `T键`：根据时间/累计时间进行排序
- `E键`：切换顶部内存显示单位
- `e键`：切换进程内存显示单位
- `l键`：切换显示平均负载和启动时间信息
- `i键`：不显示闲置或无用的进程，等同于`-i`参数，再次按下变为默认显示。
- `t键`：切换显示CPU状态信息
- `m键`：切换显示内存信息
## df命令:磁盘信息监控
使用`df`命令可以查看硬盘的使用情况，语法：  
`df [-h]`
- `-h`：以更加人性化的单位显示
```
[miracles@192 ~]$ df -h
Filesystem      Size  Used Avail Use% Mounted on
/dev/sda3        38G  5.2G   33G  14% /
devtmpfs        471M     0  471M   0% /dev
tmpfs           487M     0  487M   0% /dev/shm
tmpfs           487M  8.6M  478M   2% /run
tmpfs           487M     0  487M   0% /sys/fs/cgroup
/dev/sda1       297M  147M  151M  50% /boot
tmpfs            98M   32K   98M   1% /run/user/1000
tmpfs            98M     0   98M   0% /run/user/0
```
## iostat命令:查看CPU、磁盘
话不多说，语法如下：  
`iostat [-x] [num1] [num2]`
- `-x`：显示更多信息
- `num1`：填写数字，表示刷新间隔。
- `num2`：填写数字，表示刷新几次。
```
[miracles@192 ~]$ iostat -x
Linux 3.10.0-957.el7.x86_64 (192.168.44.131) 	02/14/2025 	_x86_64_	(1 CPU)

avg-cpu:  %user   %nice %system %iowait  %steal   %idle
           0.54    0.11    1.05    0.06    0.00   98.23

Device:         rrqm/s   wrqm/s     r/s     w/s    rkB/s    wkB/s avgrq-sz avgqu-sz   await r_await w_await  svctm  %util
sda               0.09     1.58    7.17    0.68   519.29    14.66   136.17     0.01    1.26    1.20    1.89   0.57   0.45
```
:::info 解释
- `rrqm/s`：每秒这个设备相关的读取请求有多少被Merge了（当系统调用需要读取数据的时候，VFS将请求发到各个FS，如果FS发现不同的读取请求的是相同的Block的数据，FS会将这个请求合并Merge，提高IO利用率，避免重复调用）。
- ` wrqm/s`：每秒这个设备相关的写入请求有多少被Merge了
- `r/s`：每秒读取的扇区数
- `w/s`：每秒写入的扇区数
- `rkB/s`：每秒发送到设备的读取请求数
- `wkB/s`：每秒发送到设备的写入请求数
- `avgrq-sz`：平均请求扇区的大小
- `avgqu-sz`：平均请求队列的长度
- `await`：每一个IO请求的处理的平均时间
- `svctm`：表示平均每次设备I/O操作的服务时间
- `%util`：磁盘利用率
:::
## sar命令:网络状态监控
简单地使用`sar`命令查看网络地相关统计，语法：  
`sar -n DEV num1 num2`
- `-n`：查看网络
- `DEV`：表示查看网络接口
- `num1`：刷新间隔
- `num2`：查看次数