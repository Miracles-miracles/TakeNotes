# 软件安装
## 各系统安装一览
- win系统：
  - 自行安装：使用`.exe`、`.msi`文件
  - 软件商店：Microsoft Store
- mac系统：
  - 自行安装：使用`.dmg`、`.pkg`文件
  - 软件商店：AppStore

Linux也支持这两种方式，它使用的安装包后缀一般为`.rpm`。
## 使用yum命令安装软件
`yum`是`.rpm`包软件管理器，用于自动化安装配置Linux软件，并可以自动解决以来问题。语法如下：  
`yum [-y] [install | remove | search] 软件名称`
- `-y`：自动确认，无需手动确认安装或卸载过程。
- `install`：安装。
- `remove`：卸载。
- `search`：搜索。
:::important 重要
`yum`命令使用不了或者有报错的小伙伴看过来！

**记得先root**

**CentOS 7**  
**1. 备份**
```
mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup
```
**2. 下载新的 CentOS-Base.repo 到 /etc/yum.repos.d/**
```
wget -O /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-7.repo
```
或者
```
curl -o /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-7.repo
```
**3. 运行 `yum makecache` 生成缓存**
:::