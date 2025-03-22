<template><div><h1 id="权限信息" tabindex="-1"><a class="header-anchor" href="#权限信息"><span>权限信息</span></a></h1>
<h2 id="认知权限信息" tabindex="-1"><a class="header-anchor" href="#认知权限信息"><span>认知权限信息</span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">[miracles@192 ~]$ ls -l</span>
<span class="line">total 4</span>
<span class="line">drwxr-xr-x. 2 miracles miracles  6 Jan 24 16:37 Desktop</span>
<span class="line">drwxr-xr-x. 2 miracles miracles  6 Jan 24 16:37 Documents</span>
<span class="line">drwxr-xr-x. 2 miracles miracles  6 Jan 24 16:37 Downloads</span>
<span class="line">drwxr-xr-x. 2 miracles miracles  6 Jan 24 16:37 Music</span>
<span class="line">drwxr-xr-x. 2 miracles miracles  6 Jan 24 16:37 Pictures</span>
<span class="line">drwxr-xr-x. 2 miracles miracles  6 Jan 24 16:37 Public</span>
<span class="line">drwxr-xr-x. 2 miracles miracles  6 Jan 24 16:37 Templates</span>
<span class="line">-rw-rw-r--. 1 miracles miracles 26 Feb 11 09:55 test.txt</span>
<span class="line">drwxr-xr-x. 2 miracles miracles  6 Jan 24 16:37 Videos</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在最左侧<code v-pre>.</code>之前的表示<strong>文件、文件夹的权限控制信息</strong>；随后看到的两个“miracles”，前一个表示<strong>文件、文件夹所属用户</strong>，后一个表示<strong>文件、文件夹所属用户组</strong>。</p>
<h2 id="权限控制信息解读" tabindex="-1"><a class="header-anchor" href="#权限控制信息解读"><span>权限控制信息解读</span></a></h2>
<p>权限控制信息共10个，分为第一个和每3个一组。</p>
<ul>
<li>第一个：或<code v-pre>-</code>或<code v-pre>d</code>或<code v-pre>l</code>，分别表示文件、文件夹和软链接。</li>
<li>后面九个：每三个一组，分别是所属用户权限、所属用户组权限、其他用户权限。</li>
</ul>
<h2 id="rwx解读" tabindex="-1"><a class="header-anchor" href="#rwx解读"><span>rwx解读</span></a></h2>
<ul>
<li><code v-pre>r</code>：读权限
<ul>
<li>针对文件夹，可以查看文件夹内容，如<code v-pre>ls</code>命令。</li>
</ul>
</li>
<li><code v-pre>w</code>：写权限
<ul>
<li>针对文件夹，可以在文件夹内创建、删除、改名等。</li>
</ul>
</li>
<li><code v-pre>x</code>：执行权限
<ul>
<li>针对文件夹，可以更改工作目录到此文件夹，即<code v-pre>cd</code>进入。</li>
</ul>
</li>
</ul>
</div></template>


