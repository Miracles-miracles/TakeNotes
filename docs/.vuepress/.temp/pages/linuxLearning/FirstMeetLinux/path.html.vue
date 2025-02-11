<template><div><h2 id="相对路径和绝对路径" tabindex="-1"><a class="header-anchor" href="#相对路径和绝对路径"><span>相对路径和绝对路径</span></a></h2>
<ul>
<li>绝对路径：以根目录为起点，路径描述以<code v-pre>/</code>开头。</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">[miracles@192 /]$ cd /home/miracles/Desktop</span>
<span class="line">[miracles@192 Desktop]$ pwd</span>
<span class="line">/home/miracles/Desktop</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>相对路径：以当前目录为起点，路径描述无需以<code v-pre>/</code>开头。</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">[miracles@192 ~]$ ls</span>
<span class="line">Desktop    Downloads  Pictures  Templates</span>
<span class="line">Documents  Music      Public    Videos</span>
<span class="line">[miracles@192 ~]$ cd Desktop</span>
<span class="line">[miracles@192 Desktop]$ pwd</span>
<span class="line">/home/miracles/Desktop</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br>
<h2 id="特殊路径符" tabindex="-1"><a class="header-anchor" href="#特殊路径符"><span>特殊路径符</span></a></h2>
<ul>
<li><code v-pre>.</code>：表示当前目录。如<code v-pre>cd ./Desktop</code>表示切换到当前目录下的Desktop目录内，和<code v-pre>cd Desktop</code>效果一致。</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">[miracles@192 ~]$ cd ./Desktop</span>
<span class="line">[miracles@192 Desktop]$ pwd</span>
<span class="line">/home/miracles/Desktop</span>
<span class="line">[miracles@192 Desktop]$ cd</span>
<span class="line">[miracles@192 ~]$ cd Desktop</span>
<span class="line">[miracles@192 Desktop]$ pwd</span>
<span class="line">/home/miracles/Desktop</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>..</code>：表示上一级目录。如<code v-pre>cd ..</code>即可切换到上一级目录，<code v-pre>cd ../..</code>切换到上二级目录。</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">[miracles@192 Desktop]$ cd ..</span>
<span class="line">[miracles@192 ~]$ pwd</span>
<span class="line">/home/miracles</span>
<span class="line">[miracles@192 ~]$ cd Desktop</span>
<span class="line">[miracles@192 Desktop]$ cd ../..</span>
<span class="line">[miracles@192 home]$ pwd</span>
<span class="line">/home</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>~</code>：表示HOME目录。比如<code v-pre>cd ~</code>即可切换到HOME目录，<code v-pre>cd ~/Desktop</code>则是切换到HOME内的Desktop目录。</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">[miracles@192 ~]$ cd ~/Desktop</span>
<span class="line">[miracles@192 Desktop]$ pwd</span>
<span class="line">/home/miracles/Desktop</span>
<span class="line">[miracles@192 Desktop]$ cd ~</span>
<span class="line">[miracles@192 ~]$ pwd</span>
<span class="line">/home/miracles</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


