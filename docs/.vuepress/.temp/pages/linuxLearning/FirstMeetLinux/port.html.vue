<template><div><h1 id="端口" tabindex="-1"><a class="header-anchor" href="#端口"><span>端口</span></a></h1>
<p>端口是设备与外界通讯交流的出入口，分为：</p>
<ul>
<li>物理端口：可见的端口，如USB接口等。</li>
<li>虚拟端口：指计算机内部的端口，是不可见的，是用来操作系统和外部进行交互使用的。</li>
</ul>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>为什么要使用虚拟端口呢？</p>
<p>使用ip只能确定计算机，但是计算机运行着很多的程序，这是仅使用ip所无法确定的。</p>
<p>通过端口可以锁定计算机上的具体程序，确保程序之间进行沟通。</p>
</div>
<p>关于端口，我们还需要了解：</p>
<ul>
<li>公认端口：1~1023，系统内置或知名程序预留，非特殊不占用。</li>
<li>注册端口：1024~49151，随意使用，松散绑定程序或服务。</li>
<li>动态端口：49152~65535，临时使用。</li>
</ul>
<h2 id="nmap命令-查看端口占用" tabindex="-1"><a class="header-anchor" href="#nmap命令-查看端口占用"><span>nmap命令:查看端口占用</span></a></h2>
<p>使用<code v-pre>nmap</code>来查看端口占用，不过要先安装该命令，命令语法如下：<br>
<code v-pre>nmap 被查看的ip地址</code></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">[miracles@192 ~]$ nmap 127.0.0.1</span>
<span class="line"></span>
<span class="line">Starting Nmap 6.40 ( http://nmap.org ) at 2025-02-13 20:44 CST</span>
<span class="line">Nmap scan report for localhost (127.0.0.1)</span>
<span class="line">Host is up (0.0018s latency).</span>
<span class="line">Not shown: 996 closed ports</span>
<span class="line">PORT     STATE SERVICE</span>
<span class="line">22/tcp   open  ssh</span>
<span class="line">111/tcp  open  rpcbind</span>
<span class="line">631/tcp  open  ipp</span>
<span class="line">6000/tcp open  X11</span>
<span class="line"></span>
<span class="line">Nmap done: 1 IP address (1 host up) scanned in 0.20 seconds</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">小提示</p>
<p><code v-pre>127.0.0.1</code>是代表本机哦</p>
</div>
<h2 id="netstat命令-查看指定端口" tabindex="-1"><a class="header-anchor" href="#netstat命令-查看指定端口"><span>netstat命令:查看指定端口</span></a></h2>
<p>使用前要先安装该命令，命令语法如下：<br>
<code v-pre>netstat -anp | gerp 端口号</code></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">[miracles@192 ~]$ netstat -anp | grep 6000</span>
<span class="line">(Not all processes could be identified, non-owned process info</span>
<span class="line"> will not be shown, you would have to be root to see it all.)</span>
<span class="line">tcp        0      0 0.0.0.0:6000            0.0.0.0:*               LISTEN      -                   </span>
<span class="line">tcp6       0      0 :::6000                 :::*                    LISTEN      -                   </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


