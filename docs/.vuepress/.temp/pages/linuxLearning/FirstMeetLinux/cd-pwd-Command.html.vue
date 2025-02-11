<template><div><h2 id="cd命令" tabindex="-1"><a class="header-anchor" href="#cd命令"><span>cd命令</span></a></h2>
<p>cd命令用于切换工作目录，命令来源自英文<strong>Change Directory</strong>，该命令语法如下：<br>
<code v-pre>cd [Linux路径]</code></p>
<ul>
<li>cd命令无需选项，只有参数，表示要切换到哪个目录。</li>
<li>cd命令直接执行，不写参数，表示回到用户的HOME目录。</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">[miracles@192 ~]$ cd /</span>
<span class="line">[miracles@192 /]$ ls</span>
<span class="line">bin   dev  home  lib64  mnt  proc  run   srv  tmp  var</span>
<span class="line">boot  etc  lib   media  opt  root  sbin  sys  usr</span>
<span class="line">[miracles@192 /]$ cd</span>
<span class="line">[miracles@192 ~]$ ls</span>
<span class="line">Desktop    Downloads  Pictures  Templates</span>
<span class="line">Documents  Music      Public    Videos</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br>
<h2 id="pwd命令" tabindex="-1"><a class="header-anchor" href="#pwd命令"><span>pwd命令</span></a></h2>
<p>pwd命令用于查看当前目录，命令来自<strong>Print Work Directory</strong>，该命令语法如下：<br>
<code v-pre>pwd</code></p>
<ul>
<li>pwd命令无选项、无参数，直接输入pwd即可。</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">[miracles@192 ~]$ pwd</span>
<span class="line">/home/miracles</span>
<span class="line">[miracles@192 ~]$ cd /</span>
<span class="line">[miracles@192 /]$ pwd</span>
<span class="line">/</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


