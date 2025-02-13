# 进程管理
## ps命令:查看进程
使用`ps`命令查看Linux系统中的进程，语法：  
`ps [-e -f]`
- `-e`：显示出全部的进程
- `-f`：以完全格式化的形式展示信息

以下内容仅展示部分信息：
```
[miracles@192 ~]$ ps -ef
UID         PID   PPID  C STIME TTY          TIME CMD
root          1      0  0 16:16 ?        00:00:05 /usr/lib/syst
root          2      0  0 16:16 ?        00:00:00 [kthreadd]
root          3      2  0 16:16 ?        00:00:03 [ksoftirqd/0]
root          5      2  0 16:16 ?        00:00:00 [kworker/0:0H
root          7      2  0 16:16 ?        00:00:00 [migration/0]
root          8      2  0 16:16 ?        00:00:00 [rcu_bh]
root          9      2  0 16:16 ?        00:00:01 [rcu_sched]
root         10      2  0 16:16 ?        00:00:00 [lru-add-drai
root         11      2  0 16:16 ?        00:00:00 [watchdog/0]
root         13      2  0 16:16 ?        00:00:00 [kdevtmpfs]
root         14      2  0 16:16 ?        00:00:00 [netns]
root         15      2  0 16:16 ?        00:00:00 [khungtaskd]
```
:::info 解释
- UID：进程所属的用户ID
- PID：进程的进程号ID
- PPID：进程的父ID
- C：此进程的CPU占用率
- STIME：进程的启动时间
- TTY：启动此进程的终端序号
- TIME：进程占用CPU的时间
- CMD：进程对应的名称或启动路径或启动命令
:::
## kill命令:关闭进程
kill语法：  
`kill [-9] 进程ID`
- `-9`：表示强制关闭进程