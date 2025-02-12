<template><div><h1 id="systemctl命令" tabindex="-1"><a class="header-anchor" href="#systemctl命令"><span>systemctl命令</span></a></h1>
<p>Linux很多软件均支持<code v-pre>sysemctl</code>命令控制启动、停止、开机自启，能被<code v-pre>systemctl</code>管理的软件一般被称为：服务。其语法如下：<br>
<code v-pre>systemctl start | stop | status | enable | disable 服务名</code></p>
<ul>
<li><code v-pre>start</code>：启动</li>
<li><code v-pre>stop</code>：关闭</li>
<li><code v-pre>status</code>：查看状态</li>
<li><code v-pre>enable</code>：开启开机自启</li>
<li><code v-pre>disable</code>：关闭开机自启</li>
</ul>
<p>系统内置的服务比较多，如：</p>
<ul>
<li>NetworkManager：主网络服务</li>
<li>network：副网络服务</li>
<li>firewalld：防火墙服务</li>
<li>sshd，ssh服务</li>
</ul>
</div></template>


