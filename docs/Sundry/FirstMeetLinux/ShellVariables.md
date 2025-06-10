# Shell变量
## 定义shell变量
::: warning
注意，变量名和等号之间不能有空格！因为空格通常用于分隔变量和参数。
:::
## 使用shell变量
要使用一个定义过的变量，只需要在变量名前面加一个美元符号，即`$`。  
```
#!/bin/bash
name="Miracles"
echo $name

[root@localhost code]# ./test.sh
Miracles
```
为帮助解释器识别变量边界，还可以为变量添加一个花括号，如`${name}`。

一个已经被定义的变量还可以被重新定义：
```
#!/bin/bash
name="Miracles"
name="Tom"
echo $name

[root@localhost code]# ./test.sh
Tom
```
## 只读变量
使用 readonly 命令可以将变量定义为只读变量，只读变量的值不能被改变。
```
#!/bin/bash
name="Miracles"
readonly name
name="Tom"
echo $name

[root@localhost code]# ./test.sh
./test.sh: line 4: name: readonly variable
Miracles
```
## 删除变量
要想删除一个变量，需要使用`unset`命令。变量被删除后不能再次使用，而且只读变量不能被删除。
```
#!/bin/bash
address="WHPU"
name="Miracles"
readonly name
unset address
unset name
echo $name
echo $address

[root@localhost code]# ./test.sh
./test.sh: line 6: unset: name: cannot unset: readonly variable
Miracles
```
## 变量类型
- 字符串变量：在Shell中，变量通常被视为字符串。可以使用单引号 ' 或双引号 " 来定义字符串。
- 整数变量：使用`declare`或`typeset`命令来声明整数变量，这样的变量只包含整数值。
::: info
`declare` [选项] [变量名=值]
- `-r`：将变量设置为只读，不可修改。
- `-i`：将变量设置为整数类型。
- `-a`：将变量设置为数组类型。
- `-f`：将变量设置为函数类型。
- `-x`：将变量设置为环境变量。
:::
```
#!/bin/bash
declare -i num=1.2
echo $num

[root@localhost code]# ./test.sh
./test.sh: line 2: declare: 1.2: syntax error: invalid arithmetic operator (error token is ".2")


!/bin/bash
declare -i num=1
echo $num

[root@localhost code]# ./test.sh
1
```
- 数组变量：允许在变量中存储多个值。
```
!/bin/bash
declare -a array1=(1 2 3 4 5)
array2=(6 7 8 9 10)
echo $array1
echo $array2

[root@localhost code]# ./test.sh
1
6

```
::: note
和C语言有点像，只不过C语言直接打印数组名会打印出首元素的地址，而shell则直接打印出了第一个元素。
:::
- 环境变量：这些是由操作系统或用户设置的特殊变量，用于配置Shell的行为和影响其执行环境。
- 特殊变量：有一些特殊变量在 Shell 中具有特殊含义，例如`$0`表示脚本的名称，`$1`，`$2`等表示脚本的参数。`$#`表示传递给脚本的参数数量，`$?`表示上一个命令的退出状态等。
## shell字符串
对于shell的字符串，可以用单引号，也可以用双引号。不过还是用双引号多一点，因为单引号有一些限制，而双引号不仅能包含变量，还可以出现转义字符。
### 拼接字符串
```
#!/bin/bash
str1="Hello"
str2="Shell"
str3="Script"
echo $str1 $str2 $str3

[root@localhost code]# ./test.sh
Hello Shell Script
```
### 获取字符串长度
使用字符符串变量名并在里面加`#`就可以了。
```
#!/bin/bash
string="abcd"
echo ${#string}
echo ${#string[0]}

[root@localhost code]# ./test.sh
4
4
```
### 提取子字符串
