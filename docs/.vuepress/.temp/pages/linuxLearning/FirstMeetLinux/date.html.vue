<template><div><h1 id="日期和时区" tabindex="-1"><a class="header-anchor" href="#日期和时区"><span>日期和时区</span></a></h1>
<h2 id="date命令" tabindex="-1"><a class="header-anchor" href="#date命令"><span>date命令</span></a></h2>
<p>通过date命令可以在命令行中查看系统的时间，语法如下：<br>
<code v-pre>date [-d] [+格式化字符串]</code></p>
<ul>
<li><code v-pre>-d</code>：按照给定的字符串显示日期，一般用于日期计算。</li>
<li><code v-pre>格式化字符串</code>：通过特定的字符串标记来控制显示的日期格式。
<ul>
<li><code v-pre>%Y</code>：年</li>
<li><code v-pre>%y</code>：年份后两位数字</li>
<li><code v-pre>%M</code>：月份</li>
<li><code v-pre>%d</code>：日</li>
<li><code v-pre>%H</code>：小时</li>
<li><code v-pre>%M</code>：分钟</li>
<li><code v-pre>%S</code>：秒</li>
<li><code v-pre>%s</code>：自1970-01-01 00:00:00 UTC到现在的秒数</li>
</ul>
</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">[miracles@192 ~]$ date</span>
<span class="line">Thu Feb 13 09:52:11 CST 2025</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改时区" tabindex="-1"><a class="header-anchor" href="#修改时区"><span>修改时区</span></a></h2>
<p>首先使用<code v-pre>root</code>权限，执行以下命令后将时区修改为东八区：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">rm -f /etc/localtime</span>
<span class="line">sudo ln -s /usr/share/zoneinfo/Asia/Shanghai /etc/localtime</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info">
<p class="hint-container-title">信息</p>
<p>不过我个人觉得没必要，虽然是Linux系统，但也不是完全都是命令行，修改时间直接使用图形化操作不是更加直观方便吗？</p>
</div>
<h2 id="自动校准时间" tabindex="-1"><a class="header-anchor" href="#自动校准时间"><span>自动校准时间</span></a></h2>
<h3 id="ntp程序" tabindex="-1"><a class="header-anchor" href="#ntp程序"><span>ntp程序</span></a></h3>
<p>可以通过<code v-pre>ntp</code>程序自动校准系统时间，安装<code v-pre>ntp</code>如下：<br>
<code v-pre>yum -y install ntp</code></p>
<p><strong>别忘了<code v-pre>root</code>或者<code v-pre>sudo</code>，没有<code v-pre>sudo</code>权限的快去配置哦，在搜索框中搜索“sudo”就能快速找到啦。</strong></p>
<ul>
<li>启动并设置开机自启：</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">systemctl start ntpd</span>
<span class="line">systemctl enable ntpd</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>也可以root后手动校准：</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">[miracles@192 ~]$ sudo ntpdate -u ntp.aliyun.com</span>
<span class="line">13 Feb 10:21:44 ntpdate[10857]: adjust time server 203.107.6.88 offset 0.006528 sec</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


