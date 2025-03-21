<template><div><h1 id="在centos上安装mysql" tabindex="-1"><a class="header-anchor" href="#在centos上安装mysql"><span>在CentOS上安装MySQL</span></a></h1>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2>
<h3 id="配置yum仓库" tabindex="-1"><a class="header-anchor" href="#配置yum仓库"><span>配置yum仓库</span></a></h3>
<ul>
<li>
<p>更新密钥
使用<code v-pre>rpm --import</code>来导入密钥，MySQL最新GPG-KEY在其官方仓库中：<a href="https://repo.mysql.com" target="_blank" rel="noopener noreferrer">https://repo.mysql.com</a>。<br>
<code v-pre>rpm --import https://repo.mysql.com/RPM-GPG-KEY-mysql-2023</code><br>
输入完改命令直接回车即可</p>
</li>
<li>
<p>配置MySQL yum源
<code v-pre>rpm -Uvh http://repo.mysql.com/mysql80-community-release-el7-11.noarch.rpm</code><br>
<code v-pre>rpm</code>后面的链接就是下载rpm包的地方，也就是在上面repo网站中的文件链接：<a href="https://repo.mysql.com" target="_blank" rel="noopener noreferrer">https://repo.mysql.com</a>。这里选择的是社区发行版，而且建议选择带有<code v-pre>noarch</code>的，因为noarch软件包不依赖于特定的CPU指令集，因此可以在任何平台上安装和使用。</p>
</li>
</ul>
<div class="hint-container note">
<p class="hint-container-title">Note</p>
<p>我这里用的是CentOS7，选择<code v-pre>el9</code>的时候报错缺少依赖项，但是选择<code v-pre>el7</code>就没事了。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">[root@localhost ~]# rpm -Uvh http://repo.mysql.com/mysql84-community-release-el9-1.noarch.rpm</span>
<span class="line">Retrieving http://repo.mysql.com/mysql84-community-release-el9-1.noarch.rpm</span>
<span class="line">error: Failed dependencies:</span>
<span class="line">	rpmlib(PayloadIsZstd) &lt;= 5.4.18-1 is needed by mysql84-community-release-el9-1.noarch</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<p>输入命令回车后回显示：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">[root@localhost ~]# rpm -Uvh http://repo.mysql.com/mysql80-community-release-el7-11.noarch.rpm</span>
<span class="line">Retrieving http://repo.mysql.com/mysql80-community-release-el7-11.noarch.rpm</span>
<span class="line">warning: /var/tmp/rpm-tmp.dmOHmG: Header V4 RSA/SHA256 Signature, key ID 3a79bd29: NOKEY</span>
<span class="line">Preparing...                          ################################# [100%]</span>
<span class="line">Updating / installing...</span>
<span class="line">   1:mysql80-community-release-el7-11 ################################# [100%]</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用yum命令安装mysql" tabindex="-1"><a class="header-anchor" href="#使用yum命令安装mysql"><span>使用yum命令安装MySQL</span></a></h3>
<p>执行<code v-pre>yum -y install mysql-community-server</code>，下载速度视网络情况而定，一般几分钟就够了。</p>
<h3 id="设置开机自启动" tabindex="-1"><a class="header-anchor" href="#设置开机自启动"><span>设置开机自启动</span></a></h3>
<p>MySQL安装后会自动配置为<code v-pre>mysqld</code>的服务，可以使用<code v-pre>systemctl</code>来管理。<br>
使用<code v-pre>systemctl start mysqld</code>来实现启动MySQL（启动需要几十秒，需耐心等待）<br>
使用<code v-pre>systemctl enable mysqld</code>来实现开机自启动<br>
使用<code v-pre>systemctl status mysqld</code>开查看运行状态</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">[root@localhost ~]# systemctl status mysqld</span>
<span class="line">● mysqld.service - MySQL Server</span>
<span class="line">   Loaded: loaded (/usr/lib/systemd/system/mysqld.service; enabled; vendor preset: disabled)</span>
<span class="line">   Active: active (running) since Fri 2025-03-21 20:14:13 CST; 2min 29s ago</span>
<span class="line">     Docs: man:mysqld(8)</span>
<span class="line">           http://dev.mysql.com/doc/refman/en/using-systemd.html</span>
<span class="line"> Main PID: 11417 (mysqld)</span>
<span class="line">   Status: "Server is operational"</span>
<span class="line">   CGroup: /system.slice/mysqld.service</span>
<span class="line">           └─11417 /usr/sbin/mysqld</span>
<span class="line"></span>
<span class="line">Mar 21 20:13:39 localhost.localdomain systemd[1]: Starting MySQL Server...</span>
<span class="line">Mar 21 20:14:13 localhost.localdomain systemd[1]: Started MySQL Server.</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就算是成功了！</p>
<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2>
<p>这部分主要是配置管理员用户root的密码和允许远程登录的权限</p>
<h3 id="获取mysql的初始密码" tabindex="-1"><a class="header-anchor" href="#获取mysql的初始密码"><span>获取MySQL的初始密码</span></a></h3>
<p>MySQL的日志文件存储在<code v-pre>mysqld.log</code>文件中，具体路径是<code v-pre>/var/log/mysqld.log</code>，其中存储着名为<code v-pre>temporary pass word</code>的初始密码，使用<code v-pre>grep</code>过滤即可，具体命令如下：<br>
<code v-pre>cat /var/log/mysqld.log | grep &quot;temporary password&quot;</code><br>
选中并复制初始密码</p>
<h3 id="登录mysql数据库系统" tabindex="-1"><a class="header-anchor" href="#登录mysql数据库系统"><span>登录MySQL数据库系统</span></a></h3>
<p>使用密码登录root：<code v-pre>mysql -uroot -p</code></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">[root@localhost log]# mysql -uroot -p</span>
<span class="line">Enter password: </span>
<span class="line">Welcome to the MySQL monitor.  Commands end with ; or \g.</span>
<span class="line">Your MySQL connection id is 8</span>
<span class="line">Server version: 8.0.41</span>
<span class="line"></span>
<span class="line">Copyright (c) 2000, 2025, Oracle and/or its affiliates.</span>
<span class="line"></span>
<span class="line">Oracle is a registered trademark of Oracle Corporation and/or its</span>
<span class="line">affiliates. Other names may be trademarks of their respective</span>
<span class="line">owners.</span>
<span class="line"></span>
<span class="line">Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.</span>
<span class="line"></span>
<span class="line">mysql></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改root用户密码" tabindex="-1"><a class="header-anchor" href="#修改root用户密码"><span>修改root用户密码</span></a></h3>
<p><code v-pre>ALTER USER 'root'@'localhost' IDENTIFIED BY '密码';</code></p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>注意一点，MySQL的命令很多时候在结尾都有<code v-pre>;</code>，这和Linux命令是很好的区分点。</p>
</div>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">mysql> ALTER USER 'root'@'localhost' IDENTIFIED BY '123456';</span>
<span class="line">ERROR 1819 (HY000): Your password does not satisfy the current policy requirements</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container note">
<p class="hint-container-title">Note</p>
<p>密码要求比较严格，要求大于8位的带有大小写、数字和特殊符号</p>
</div>
<p>当你设置完正确的密码之后就会出现<code v-pre>Query OK, 0 rows affected (0.06 sec)</code>的字样</p>
<h3 id="更改密码配置" tabindex="-1"><a class="header-anchor" href="#更改密码配置"><span>更改密码配置</span></a></h3>
<p>当数据库只是用于学习用途时，可以将密码设置的简单一些，这时需要修改一下密码的配置才能做到。不过我更推荐使用正规密码，不管是用于工作还是学习，这是一种意识的培养，就像支持正版的版权意识一样。</p>
<ul>
<li>降低密码的安全级别，将密码安全级别设置为“LOW”<br>
<code v-pre>set global validate_password_policy=LOW;</code></li>
<li>密码长度最低降至4位<br>
<code v-pre>set global validate_password_length=4;</code></li>
<li>重复上面修改密码的命令<br>
<code v-pre>ALTER USER 'root'@'localhost' IDENTIFIED BY '密码';</code></li>
</ul>
<p>现在就可以使用简单密码了，比如纯数字的“123456”之类的。</p>
<h3 id="配置root运行远程登录" tabindex="-1"><a class="header-anchor" href="#配置root运行远程登录"><span>配置root运行远程登录</span></a></h3>
</div></template>


