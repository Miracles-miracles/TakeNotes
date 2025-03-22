<template><div><h1 id="在ubuntu上安装mysql" tabindex="-1"><a class="header-anchor" href="#在ubuntu上安装mysql"><span>在Ubuntu上安装MySQL</span></a></h1>
<p>使用<code v-pre>cat /proc/version</code>查看Ubuntu版本，我的是24.04，应该有内置的MySQL 8.0，直接通过apt安装即可。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">miracles@192:~$ cat /proc/version</span>
<span class="line">Linux version 6.8.0-52-generic (buildd@lcy02-amd64-046) (x86_64-linux-gnu-gcc-13 (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0, GNU ld (GNU Binutils for Ubuntu) 2.42) #53-Ubuntu SMP PREEMPT_DYNAMIC Sat Jan 11 00:06:25 UTC 2025</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2>
<h3 id="更新apt仓库信息" tabindex="-1"><a class="header-anchor" href="#更新apt仓库信息"><span>更新apt仓库信息</span></a></h3>
<p><code v-pre>apt update</code><br>
直接回车即可</p>
<h3 id="安装mysql" tabindex="-1"><a class="header-anchor" href="#安装mysql"><span>安装MySQL</span></a></h3>
<p><code v-pre>apt install -y mysql-server</code><br>
等待一小会儿即可安装成功</p>
<h3 id="启动mysql" tabindex="-1"><a class="header-anchor" href="#启动mysql"><span>启动MySQL</span></a></h3>
<p>与CentOS不同，这里需要手动启动。<br>
<code v-pre>/etc/init.d/mysql start</code></p>
<div class="hint-container note">
<p class="hint-container-title">Note</p>
<p>视频里的Ubuntu版本是22.04，安装MySQL后需手动启动。我的24.04在安装后是自动启动的，查看状态即可知道。<br>
我将Ubuntu虚拟机关机后再开机，发现MySQL甚至是开机自启动的，这就省事多了。</p>
</div>
<ul>
<li>查看状态
<code v-pre>/etc/init.d/mysql status</code></li>
</ul>
<h3 id="登录mysql" tabindex="-1"><a class="header-anchor" href="#登录mysql"><span>登录MySQL</span></a></h3>
<p>直接使用<code v-pre>mysql</code></p>
<h3 id="设置密码" tabindex="-1"><a class="header-anchor" href="#设置密码"><span>设置密码</span></a></h3>
<p><code v-pre>ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '密码';</code></p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>在Ubuntu中的MySQL密码竟然是不受拘束的任意，也就是安全级别很低的纯数字密码都是可以的。那我可就“123456”了。</p>
</div>
<h3 id="对mysql进行初始化" tabindex="-1"><a class="header-anchor" href="#对mysql进行初始化"><span>对MySQL进行初始化</span></a></h3>
<div class="hint-container important">
<p class="hint-container-title">Important</p>
<p>这里要先退出MySQL，在Ubuntu中运行该命令。</p>
</div>
<p><code v-pre>mysql_secure_installation</code><br>
回车后输入密码，提示是否要增强密码安全性、是否更改root密码、是否移除匿名用户、是否禁止远程登录、是否移除自带的测试数据库、是否刷新权限。<br>
这里选择：</p>
<ul>
<li>不需要，回车</li>
<li>不更改，回车</li>
<li>移除，输入y，回车</li>
<li>不禁止，回车</li>
<li>不删除，回车</li>
<li>刷新，输入y，回车</li>
</ul>
<h3 id="重新登录" tabindex="-1"><a class="header-anchor" href="#重新登录"><span>重新登录</span></a></h3>
<p>这时登录就需要输入密码了，和在CentOS中登录的命令一样。</p>
</div></template>


