<template><div><h1 id="echo、tail与重定向符" tabindex="-1"><a class="header-anchor" href="#echo、tail与重定向符"><span>echo、tail与重定向符</span></a></h1>
<h2 id="echo命令" tabindex="-1"><a class="header-anchor" href="#echo命令"><span>echo命令</span></a></h2>
<p>echo命令可以在命令行中输出指定内容，有点像C语言的<code v-pre>printf</code>，其语法如下：<br>
<code v-pre>echo 输出的内容</code></p>
<ul>
<li>无需选项，只有一个参数，表示要输出的内容，复杂内容可以使用<code v-pre>&quot;&quot;</code>来包围内容。</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">[miracles@192 ~]$ echo "Hello Linux"</span>
<span class="line">Hello Linux</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>使用飘号，可以把包围的内容作为命令来执行。</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">[miracles@192 ~]$ echo pwd</span>
<span class="line">pwd</span>
<span class="line">[miracles@192 ~]$ echo `pwd`</span>
<span class="line">/home/miracles</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br>
<h2 id="tail命令" tabindex="-1"><a class="header-anchor" href="#tail命令"><span>tail命令</span></a></h2>
<p>tail命令可以查看文件尾部的内容，用于跟踪文件的最新更改，语法如下：<br>
<code v-pre>tail [-f -num] Linux路径</code></p>
<ul>
<li><code v-pre>-f</code>：表示持续跟踪。</li>
<li><code v-pre>-num</code>：表示查看尾部多少行，不填的话默认10行。</li>
<li><code v-pre>Linux路径</code>：顾名思义，表示被跟踪文件的路径。
<br></li>
</ul>
<h2 id="重定向符-和" tabindex="-1"><a class="header-anchor" href="#重定向符-和"><span>重定向符：<code v-pre>&gt;</code>和<code v-pre>&gt;&gt;</code></span></a></h2>
<ul>
<li><code v-pre>&gt;</code>：将左侧命令的结果<strong>覆盖</strong>写入到符号右侧指定的文件中。</li>
<li><code v-pre>&gt;&gt;</code>：将左侧命令的结果<strong>追加</strong>写入到符号右侧指定的文件中。</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">[miracles@192 ~]$ ls</span>
<span class="line">Desktop    Downloads  Pictures  Templates  Videos</span>
<span class="line">Documents  Music      Public    test.txt</span>
<span class="line">[miracles@192 ~]$ cat test.txt</span>
<span class="line">itheima is a brand of itcast.</span>
<span class="line">itcast stock code is 00302.</span>
<span class="line">[miracles@192 ~]$ echo "hello linux" > test.txt</span>
<span class="line">[miracles@192 ~]$ cat test.txt</span>
<span class="line">hello linux</span>
<span class="line">[miracles@192 ~]$ echo "hello windows" >> test.txt</span>
<span class="line">[miracles@192 ~]$ cat test.txt</span>
<span class="line">hello linux</span>
<span class="line">hello windows</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


