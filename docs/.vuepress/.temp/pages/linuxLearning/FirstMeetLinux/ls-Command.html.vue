<template><div><h2 id="ls命令" tabindex="-1"><a class="header-anchor" href="#ls命令"><span>ls命令</span></a></h2>
<p>ls命令的作用是列出目录下的内容，相当于你双击打开文件夹后看到了其中的内容。其语法细节如下：<br>
<code v-pre>ls [-a -l -h] [Linux路径]</code></p>
<ul>
<li><code v-pre>-a</code> <code v-pre>-l</code> <code v-pre>-h</code>都是可选的选项，每个选项都有自己的作用。</li>
<li>Linux路径是该命令的可选参数</li>
</ul>
<p>当不使用选项和参数，直接使用<code v-pre>ls</code>命令本体时，表示以平铺的形式列出当前目录下的内容。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">[miracles@192 ~]$ ls</span>
<span class="line">Desktop    Downloads  Pictures  Templates</span>
<span class="line">Documents  Music      Public    Videos</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br>
<h2 id="ls命令的选项和参数" tabindex="-1"><a class="header-anchor" href="#ls命令的选项和参数"><span>ls命令的选项和参数</span></a></h2>
<ul>
<li>当<code v-pre>ls</code>不使用参数时，表示列出当前工作目录的内容，如上面的HOME目录。</li>
<li>使用参数，则表示列出指定路径的内容，如<code v-pre>ls /</code>表示列出根目录的内容。</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">[miracles@192 home]$ ls /</span>
<span class="line">bin   dev  home  lib64  mnt  proc  run   srv  tmp  var</span>
<span class="line">boot  etc  lib   media  opt  root  sbin  sys  usr</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br>
<ul>
<li><code v-pre>-a</code>：使用该选项可以展示所有选项，包括隐藏文件。</li>
<li><code v-pre>-l</code>：以竖向排列的列表形式展示内容。</li>
<li><code v-pre>-h</code>：表示易于阅读的形式列出文件大小，如K、M、G。</li>
</ul>
<p><strong>选项可以组合使用，如：<code v-pre>ls -l-a</code>、<code v-pre>ls -la</code>、<code v-pre>ls -al</code>（三种写法是一样的，表示同时应用<code v-pre>-l</code>和<code v-pre>-a</code>的功能）</strong></p>
<p><strong>选项也可以和参数混合使用，如：<code v-pre>ls -a -l /</code>（以竖向列表的形式展示根目录中所有文件，包括隐藏文件）</strong></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">[miracles@192 home]$ ls -lah /</span>
<span class="line">total 24K</span>
<span class="line">dr-xr-xr-x.  17 root root  224 Jan 24 16:30 .</span>
<span class="line">dr-xr-xr-x.  17 root root  224 Jan 24 16:30 ..</span>
<span class="line">lrwxrwxrwx.   1 root root    7 Jan 24 16:15 bin -> usr/bin</span>
<span class="line">dr-xr-xr-x.   5 root root 4.0K Jan 24 16:31 boot</span>
<span class="line">drwxr-xr-x.  19 root root 3.2K Feb 10 10:02 dev</span>
<span class="line">drwxr-xr-x. 143 root root 8.0K Feb 10 10:18 etc</span>
<span class="line">drwxr-xr-x.   3 root root   22 Jan 24 16:31 home</span>
<span class="line">lrwxrwxrwx.   1 root root    7 Jan 24 16:15 lib -> usr/lib</span>
<span class="line">lrwxrwxrwx.   1 root root    9 Jan 24 16:15 lib64 -> usr/lib64</span>
<span class="line">drwxr-xr-x.   2 root root    6 Apr 11  2018 media</span>
<span class="line">drwxr-xr-x.   2 root root    6 Apr 11  2018 mnt</span>
<span class="line">drwxr-xr-x.   3 root root   16 Jan 24 16:22 opt</span>
<span class="line">dr-xr-xr-x. 207 root root    0 Feb 10 10:01 proc</span>
<span class="line">dr-xr-x---.   4 root root  223 Feb 10 10:18 root</span>
<span class="line">drwxr-xr-x.  41 root root 1.3K Feb 10 10:18 run</span>
<span class="line">lrwxrwxrwx.   1 root root    8 Jan 24 16:15 sbin -> usr/sbin</span>
<span class="line">drwxr-xr-x.   2 root root    6 Apr 11  2018 srv</span>
<span class="line">dr-xr-xr-x.  13 root root    0 Feb 10 10:02 sys</span>
<span class="line">drwxrwxrwt.  17 root root 4.0K Feb 10 10:18 tmp</span>
<span class="line">drwxr-xr-x.  13 root root  155 Jan 24 16:15 usr</span>
<span class="line">drwxr-xr-x.  21 root root 4.0K Jan 24 16:32 var</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br>
<h2 id="home目录和工作目录" tabindex="-1"><a class="header-anchor" href="#home目录和工作目录"><span>HOME目录和工作目录</span></a></h2>
<p>Linux系统的命令行终端在启动时会默认加载：</p>
<ul>
<li>当前登录用户的HOME目录作为当前工作目录，则ls命令列出的是HOME目录的内容。</li>
<li>HOME目录：每个Linux操作用户在Linux系统的个人账户目录的路径是：<strong>/home/用户名</strong>。比如我的就是<code v-pre>/home/miracles</code>，而且home目录下也只有这一个miracles目录。</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">[miracles@192 ~]$ pwd</span>
<span class="line">/home/miracles</span>
<span class="line">[miracles@192 ~]$ cd ..</span>
<span class="line">[miracles@192 home]$ ls</span>
<span class="line">miracles</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


