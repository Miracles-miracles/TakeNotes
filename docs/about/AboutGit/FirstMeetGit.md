# 初次使用Git
## 判断是否安装成功
使用命令`git -v`可以查看你当前安装的Git版本，以此判断是否安装成功。
```
$ git -v
git version 2.47.1.windows.2
```
## 完善用户信息
安装完 Git 之后，要做的第一件事就是设置你的用户名和邮件地址。这一点很重要，因为每一个 Git 提交都会使用这些信息，它们会写入到你的每一次提交中，不可更改：  
```
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```
:::tip 提示
你应该在“Jonh Doe”处填写自己的名字，我使用的是GitHub上注册的昵称；还应该在“johndoe@example.com”处填写自己的邮箱，我这里填写的是自己的QQ邮箱，同样的，这也是我注册GitHub所有的邮箱。
:::
## 检查配置信息
可以使用命令`git config --list`，这时Git会列出当时所有配置信息。
```
$ git config --list
diff.astextplain.textconv=astextplain
filter.lfs.clean=git-lfs clean -- %f
filter.lfs.smudge=git-lfs smudge -- %f
filter.lfs.process=git-lfs filter-process
filter.lfs.required=true
http.sslbackend=openssl
http.sslcainfo=D:/Git/Git/mingw64/etc/ssl/certs/ca-bundle.crt
core.autocrlf=true
core.fscache=true
core.symlinks=false
pull.rebase=false
credential.helper=manager
credential.https://dev.azure.com.usehttppath=true
init.defaultbranch=master
user.email=2663284851@qq.com
user.name=Miracles-miracles
core.repositoryformatversion=0
core.filemode=false
core.bare=false
core.logallrefupdates=true
core.symlinks=false
core.ignorecase=true
remote.origin.url=git@github.com:Miracles-miracles/TakeNotes.git
:
```
在末尾`:`处按`Q`退出

很显然，在这些配置信息中有很大一部分你都看不懂，不过这三条你一定很熟悉：
```
user.email=2663284851@qq.com
user.name=Miracles-miracles
remote.origin.url=git@github.com:Miracles-miracles/
```
前两条分别是你的名字和邮箱，第三条则是Git对你的GitHub账户的远程连接，这在后面的章节会遇到。如果你恰好遇到了这个问题，那么就使用搜索框搜索吧。