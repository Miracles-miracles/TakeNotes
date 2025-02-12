<template><div><h1 id="小技巧" tabindex="-1"><a class="header-anchor" href="#小技巧"><span>小技巧</span></a></h1>
<h2 id="强制停止" tabindex="-1"><a class="header-anchor" href="#强制停止"><span>强制停止</span></a></h2>
<p>使用<code v-pre>ctrl c</code>可以强制停止Linux某些程序的运行，当然，如果命令输入错误的话也可以通过<code v-pre>ctrl c</code>来退出当前输入，重新输入。</p>
<h2 id="退出或登出" tabindex="-1"><a class="header-anchor" href="#退出或登出"><span>退出或登出</span></a></h2>
<p>使用<code v-pre>ctrl d</code>可以退出当前账户的登录，或者退出某些程序的专属页面。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">[miracles@192 ~]$ su - root</span>
<span class="line">Password: </span>
<span class="line">Last login: Tue Feb 11 14:18:13 CST 2025 on pts/0</span>
<span class="line">[root@192 ~]# logout</span>
<span class="line">[miracles@192 ~]$ </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里我先切换到了root用户，随后按下<code v-pre>ctrl d</code>，系统就自动登出了。<br>
<strong>不过嘞，<code v-pre>ctrl d</code>不能用于退出vi/vim。</strong></p>
<h2 id="查看历史输入的命令" tabindex="-1"><a class="header-anchor" href="#查看历史输入的命令"><span>查看历史输入的命令</span></a></h2>
<p>通过<code v-pre>history</code>命令可以查看历史输入过的命令。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">[miracles@192 ~]$ history</span>
<span class="line">    1  ifconfig</span>
<span class="line">    2  ls</span>
<span class="line">    3  tree</span>
<span class="line">    4  ls tree</span>
<span class="line">    5  ls -l</span>
<span class="line">    6  ls -a</span>
<span class="line">    7  clear</span>
<span class="line">    8  ls</span>
<span class="line">    9  ls /</span>
<span class="line">   10  ls -a /</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里我就展示前十条，实际上有一百多条嘞。</p>
<p>诶，我有一个想法，是不是还有命令可以查看你过去看过哪些文件或文件夹？</p>
<p><strong>我发现使用键盘的“向上”键，就是上下左右的“上”，可以直接展示你上一次输入的命令，每按一次就会查看一条你过去使用过的命令。</strong></p>
<h2 id="历史命令搜索" tabindex="-1"><a class="header-anchor" href="#历史命令搜索"><span>历史命令搜索</span></a></h2>
<p>通过<code v-pre>crtl r</code>可以输入内容以匹配，如果得到的命令是你需要的，那么直接回车是可以执行的；使用键盘左右键可以得到此命令但是不执行。</p>
<h2 id="光标移动" tabindex="-1"><a class="header-anchor" href="#光标移动"><span>光标移动</span></a></h2>
<ul>
<li><code v-pre>ctrl a</code>：跳到命令开头。</li>
<li><code v-pre>ctrl e</code>：跳到命令结尾。</li>
<li><code v-pre>ctrl 键盘左键</code>：向左跳一个单词。</li>
<li><code v-pre>ctrl 键盘右键</code>：向右跳一个单词。</li>
</ul>
<h2 id="清屏" tabindex="-1"><a class="header-anchor" href="#清屏"><span>清屏</span></a></h2>
<ul>
<li><code v-pre>ctrl l</code>：清空终端内容。</li>
<li><code v-pre>clear</code>：可以得到相同效果。</li>
</ul>
</div></template>


