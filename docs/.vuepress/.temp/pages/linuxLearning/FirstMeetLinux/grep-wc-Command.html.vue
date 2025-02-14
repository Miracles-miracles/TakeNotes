<template><div><h1 id="grep、wc与管道符" tabindex="-1"><a class="header-anchor" href="#grep、wc与管道符"><span>grep、wc与管道符</span></a></h1>
<h2 id="grep命令-过滤" tabindex="-1"><a class="header-anchor" href="#grep命令-过滤"><span>grep命令:过滤</span></a></h2>
<p>grep命令用于从文件中通过关键字过滤文件行，语法如下：<br>
<code v-pre>grep [-n] 关键字 文件路径</code></p>
<ul>
<li><code v-pre>-n</code>：可选，表示在结果中显示匹配的行号。</li>
<li><code v-pre>关键字</code>：必填，表示过滤的关键字，带有空格或其他特殊符号，建议使用<code v-pre>&quot;&quot;</code>将关键字包围起来。</li>
<li><code v-pre>文件路径</code>：必填，表示要过滤内容的文件路径，可作为输入端口。</li>
</ul>
<p>现在我将使用<code v-pre>touch</code>命令在HOME目录创建一个<code v-pre>test.txt</code>文件，并输入一些内容，然后使用命令过滤关键字“it”。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">[miracles@192 ~]$ grep -n "it" test.txt</span>
<span class="line">1:itheima is a brand of itcast.</span>
<span class="line">2:itcast stock code is 00302.</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br>
<h2 id="wc命令-统计" tabindex="-1"><a class="header-anchor" href="#wc命令-统计"><span>wc命令:统计</span></a></h2>
<p>wc命令用于统计文件的行数、单词数量等，不同选项具有不同效果，语法如下：<br>
<code v-pre>wc [-c -m -l -w] 文件路径</code></p>
<ul>
<li><code v-pre>-c</code>：统计bytes（字节）数量。</li>
<li><code v-pre>-m</code>：统计字符数量。</li>
<li><code v-pre>-l</code>：统计行数。</li>
<li><code v-pre>-w</code>：统计单词数量。</li>
<li><code v-pre>文件路径</code>：被统计的文件，作为内容输入口。</li>
</ul>
<p>以刚才的<code v-pre>test.txt</code>为例演示一下：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">[miracles@192 ~]$ cat test.txt</span>
<span class="line">itheima is a brand of itcast.</span>
<span class="line">itcast stock code is 00302.</span>
<span class="line">[miracles@192 ~]$ wc -c test.txt</span>
<span class="line">58 test.txt</span>
<span class="line">[miracles@192 ~]$ wc -m test.txt</span>
<span class="line">58 test.txt</span>
<span class="line">[miracles@192 ~]$ wc -l test.txt</span>
<span class="line">2 test.txt</span>
<span class="line">[miracles@192 ~]$ wc -w test.txt</span>
<span class="line">11 test.txt</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br>
<h2 id="管道符-嵌套" tabindex="-1"><a class="header-anchor" href="#管道符-嵌套"><span>管道符:嵌套</span></a></h2>
<p>管道符<code v-pre>|</code>可以将其左边的命令作为右边命令的输入，可以进行嵌套使用。下面我将举个例子：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">[miracles@192 ~]$ cd /etc/sysconfig/network-scripts</span>
<span class="line">[miracles@192 network-scripts]$ ls -l | grep ifcfg</span>
<span class="line">-rw-r--r--. 1 root root   403 Feb 10 10:17 ifcfg-ens33</span>
<span class="line">-rw-r--r--. 1 root root   254 Aug 24  2018 ifcfg-lo</span>
<span class="line">[miracles@192 network-scripts]$ ls</span>
<span class="line">ifcfg-ens33    ifdown-Team      ifup-post</span>
<span class="line">ifcfg-lo       ifdown-TeamPort  ifup-ppp</span>
<span class="line">ifdown         ifdown-tunnel    ifup-routes</span>
<span class="line">ifdown-bnep    ifup             ifup-sit</span>
<span class="line">ifdown-eth     ifup-aliases     ifup-Team</span>
<span class="line">ifdown-ib      ifup-bnep        ifup-TeamPort</span>
<span class="line">ifdown-ippp    ifup-eth         ifup-tunnel</span>
<span class="line">ifdown-ipv6    ifup-ib          ifup-wireless</span>
<span class="line">ifdown-isdn    ifup-ippp        init.ipv6-global</span>
<span class="line">ifdown-post    ifup-ipv6        network-functions</span>
<span class="line">ifdown-ppp     ifup-isdn        network-functions-ipv6</span>
<span class="line">ifdown-routes  ifup-plip</span>
<span class="line">ifdown-sit     ifup-plusb</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


