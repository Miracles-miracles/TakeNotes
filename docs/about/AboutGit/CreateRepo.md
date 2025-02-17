# 创建Git仓库
## git init:在已存在目录中初始化仓库
例如，我现在为项目在D盘中新建一个文件夹叫`TakeNotes`，为了在该目录中创建仓库，我需要先`cd TakeNotes`切换工作目录到该目录下。随后使用`git init`命令。

在使用`git init`命令后，执行`ls -al`，你就会发现一个`.git`文件。该文件是隐藏的，估计是怕你不小心修改了，事实上你最好不要乱动它，不然会出现一些错误导致不能正常使用。
## git clone:克隆现有仓库
如果在GitHub上已经有了仓库，可以选择将该仓库项目直接克隆至本地。为了实现克隆仓库，可以使用ssh远程链接，具体命令是`git clone+ssh链接`。如果使用ssh远程，则还需要配置ssh公钥，接下来将介绍如何生成ssh公钥。
### 生成ssh公钥
1. 检查本地主机是否存在ssh密钥
```
谈朝伟@Miracles MINGW64 /d/Coding Time/TakeNotes (main)
$ cd ~/.ssh

谈朝伟@Miracles MINGW64 ~/.ssh
$ ls
id_rsa  id_rsa.pub  known_hosts  known_hosts.old
```
可以看到我这里有`id_rsa`和`id_rsa.pub`，这就说明我的本地存在ssh公钥，其中`.pub`的就是。

2. 若不存在ssh公钥
  - 生成ssh公钥，执行以下指令：  
  `ssh-keygen -t rsa -C "xxx@xxx.com"`  
  随后一路回车即可
3. 查看ssh公钥
```
谈朝伟@Miracles MINGW64 /d/Coding Time/TakeNotes (main)
$ cd ~/.ssh

谈朝伟@Miracles MINGW64 ~/.ssh
$ cat id_rsa.pub
```
这里的公钥我就不展示了，执行命令后将公钥全部复制。

4. 在GitHub上添加ssh公钥
  - 点击自己的头像，单击“Settings”。
  - 选择“SSH and GPG keys”，单击右侧的“New SSH key”。

完成之后就可以自由的clone和push了。**不过要注意，之后在克隆仓库的时候要选择ssh的url而不是https**。
:::tip 提示
[关于验证原理和为什么要配置ssh公钥可以看这里](https://blog.csdn.net/weixin_42310154/article/details/118340458?spm=1001.2014.3001.5506)
:::