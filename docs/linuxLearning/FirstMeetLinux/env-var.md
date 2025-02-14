# 环境变量
## env命令:查看环境变量
执行`env`就能查看环境变量，它是一种`KeyValue`型的键值对。
## PATH
```
[miracles@192 ~]$ env | grep PATH
PATH=/usr/local/bin:/usr/bin:/usr/local/sbin:/usr/sbin:/home/miracles/.local/bin:/home/miracles/bin
```
当执行任何命令时，都会按照顺序从上述路径中搜索到要执行的程序的本体。
## $符号
在Linux系统中，`$`符号被用于取“变量”的值。
取得环境变量的值可以使用`$环境变量名`来取得
```
[miracles@192 ~]$ echo $PATH
/usr/local/bin:/usr/bin:/usr/local/sbin:/usr/sbin:/home/miracles/.local/bin:/home/miracles/bin
```
## 设置环境变量
- 临时设置：`export 变量名=变量值`
- 永久生效：
  - 针对当前用户生效，配置在当前用户的`~/bashrc`文件中。
  - 针对所用用户生效，配置在系统的`/etc/profile`文件中，并通过`source`配置文件，立刻生效，或重新登录生效。