<template><div><h1 id="mkdir-创建目录-文件夹" tabindex="-1"><a class="header-anchor" href="#mkdir-创建目录-文件夹"><span>mkdir:创建目录(文件夹)</span></a></h1>
<h2 id="mkdir命令" tabindex="-1"><a class="header-anchor" href="#mkdir命令"><span>mkdir命令</span></a></h2>
<p>mkdir命令可以创建新的目录（文件夹），命令来自<strong>Make Directory</strong>，该命令语法如下：
<code v-pre>mkdir [-p] Linux路径</code></p>
<ul>
<li><code v-pre>-p</code>选项可选，表示自动创建不存在的父目录，适用于创建连续多层级的目录。</li>
<li>参数必填，表示Linux路径，即要创建的文件夹的路径，相对路径或绝对路径均可。</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">[miracles@192 ~]$ ls</span>
<span class="line">Desktop    Downloads  Pictures  Templates</span>
<span class="line">Documents  Music      Public    Videos</span>
<span class="line">[miracles@192 ~]$ mkdir test</span>
<span class="line">[miracles@192 ~]$ ls</span>
<span class="line">Desktop    Downloads  Pictures  Templates  Videos</span>
<span class="line">Documents  Music      Public    test</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">[miracles@192 ~]$ mkdir -p itcast/good/666</span>
<span class="line">[miracles@192 ~]$ ls</span>
<span class="line">Desktop    Downloads  Music     Public     test</span>
<span class="line">Documents  itcast     Pictures  Templates  Videos</span>
<span class="line">[miracles@192 ~]$ cd itcast/good/666</span>
<span class="line">[miracles@192 666]$ pwd</span>
<span class="line">/home/miracles/itcast/good/666</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br>
<p><strong>创建文件夹需要修改权限，要确保操作在home目录内，不能在home外操作，这涉及到权限问题，在home目录外操作无法成功。</strong></p>
</div></template>


