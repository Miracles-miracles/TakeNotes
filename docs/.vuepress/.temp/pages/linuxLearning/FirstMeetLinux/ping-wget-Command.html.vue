<template><div><h1 id="网络请求与下载" tabindex="-1"><a class="header-anchor" href="#网络请求与下载"><span>网络请求与下载</span></a></h1>
<h2 id="ping命令-检查网络" tabindex="-1"><a class="header-anchor" href="#ping命令-检查网络"><span>ping命令:检查网络</span></a></h2>
<p>使用<code v-pre>ping</code>可以检查网络服务器是否是可联通状态，语法如下：<br>
<code v-pre>ping [-c num] ip或主机名</code></p>
<ul>
<li><code v-pre>-c</code>：检查的次数，不使用的话将无限次持续检查。</li>
<li><code v-pre>ip或主机名</code>：被检查服务器的ip或主机名。</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">[miracles@192 ~]$ ping www.bilibili.com</span>
<span class="line">PING a.w.bilicdn1.com (223.111.250.54) 56(84) bytes of data.</span>
<span class="line">64 bytes from 223.111.250.54 (223.111.250.54): icmp_seq=1 ttl=128 time=32.6 ms</span>
<span class="line">64 bytes from 223.111.250.54 (223.111.250.54): icmp_seq=2 ttl=128 time=28.7 ms</span>
<span class="line">64 bytes from 223.111.250.54 (223.111.250.54): icmp_seq=3 ttl=128 time=34.2 ms</span>
<span class="line">64 bytes from 223.111.250.54 (223.111.250.54): icmp_seq=4 ttl=128 time=89.3 ms</span>
<span class="line">^C</span>
<span class="line">--- a.w.bilicdn1.com ping statistics ---</span>
<span class="line">4 packets transmitted, 4 received, 0% packet loss, time 3016ms</span>
<span class="line">rtt min/avg/max/mdev = 28.709/46.223/89.358/24.985 ms</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="wget命令-下载文件" tabindex="-1"><a class="header-anchor" href="#wget命令-下载文件"><span>wget命令:下载文件</span></a></h2>
<p><code v-pre>wget</code>是非交互式的文件加载器，可以在命令行中下载网络文件，语法如下：<br>
<code v-pre>wget [-b] url</code></p>
<ul>
<li><code v-pre>-b</code>：可选，表示在后台下载，并且将日志写入当前工作目录的wget-log文件。</li>
<li><code v-pre>url</code>：下载连接。</li>
</ul>
<h2 id="curl命令" tabindex="-1"><a class="header-anchor" href="#curl命令"><span>curl命令</span></a></h2>
<p><code v-pre>curl</code>可以发送http网络请求，可用于下载文件、获取信息等，语法如下：<br>
<code v-pre>curl [-O] url</code></p>
<ul>
<li><code v-pre>-O</code>：用于下载文件，当<code v-pre>url</code>是下载链接时，使用该选项保存文件。</li>
<li><code v-pre>url</code>：发起请求的网络地址。</li>
</ul>
<div class="hint-container note">
<p class="hint-container-title">备注</p>
<p>使用<code v-pre>cip.cc</code>可以看到ip和地址信息</p>
</div>
</div></template>


