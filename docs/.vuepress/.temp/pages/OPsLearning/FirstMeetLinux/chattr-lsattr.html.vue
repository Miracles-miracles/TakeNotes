<template><div><h1 id="chattr-lsattr-文件隐藏属性" tabindex="-1"><a class="header-anchor" href="#chattr-lsattr-文件隐藏属性"><span>chattr-lsattr:文件隐藏属性</span></a></h1>
<p>文件隐藏属性，很厉害的，只有root用户使用特殊命令才可操作。一旦生效，若不撤回该属性，即使是root用户也无法越权操作。</p>
<h2 id="配置文件隐藏属性" tabindex="-1"><a class="header-anchor" href="#配置文件隐藏属性"><span>配置文件隐藏属性</span></a></h2>
<p>使用<code v-pre>chattr</code>命令就可以实现配置文件的隐藏属性，以下是常用选项：<br>
<code v-pre>chattr [+-=][选项] 文件或目录名称</code></p>
<ul>
<li><code v-pre>+</code>：增加某一个特殊参数，其他原本存在的参数则不动。</li>
<li><code v-pre>-</code>：删除某一个特殊参数，其他原本存在的参数则不动。</li>
<li><code v-pre>=</code>：直接设置参数，且仅有后面接的参数。</li>
<li><code v-pre>a</code>：<strong>当设置这个参数后，该文件只能增加数据，不能删除和修改，需要root才可设置。</strong></li>
<li><code v-pre>i</code>：<strong>当设置这个参数后，该文件不能被删除、改名、设置链接、写入或新增数据，相当于把这个文件锁起来了，也需要root才可设置。</strong></li>
<li><code v-pre>c</code>：自动将文件压缩，在读取的时候解压缩，在存储的时候会先压缩再存储。</li>
<li><code v-pre>d</code>：当<code v-pre>dump</code>程序被执行的时候，该文件（或目录）不会被<code v-pre>dump</code>备份。</li>
<li><code v-pre>s</code>：<strong>当文件被设置为该属性时，如果文件被删除，那么它会从磁盘中完全消失，且完全无法恢复。</strong></li>
<li><code v-pre>u</code>：<strong>若文件设置该属性，假使文件被删除了，但是数据内容仍然在磁盘中，可以用来使用恢复该文件。</strong></li>
<li><code v-pre>A</code>：在存取文件或目录时，它的存取时间atime不会被修改。</li>
<li><code v-pre>S</code>：当对文件进行修改时，该“修改”同时也会存入磁盘。</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">[root@localhost miracles]# ls</span>
<span class="line">Desktop    Downloads  Pictures  Templates  Videos</span>
<span class="line">Documents  Music      Public    test</span>
<span class="line">[root@localhost miracles]# chattr +i test</span>
<span class="line">[root@localhost miracles]# rm test</span>
<span class="line">rm: remove regular empty file ‘test’? y</span>
<span class="line">rm: cannot remove ‘test’: Operation not permitted</span>
<span class="line">[root@localhost miracles]# rm -f test</span>
<span class="line">rm: cannot remove ‘test’: Operation not permitted</span>
<span class="line">[root@localhost miracles]# chattr -i test</span>
<span class="line">[root@localhost miracles]# rm test</span>
<span class="line">rm: remove regular empty file ‘test’? y</span>
<span class="line">[root@localhost miracles]# ls</span>
<span class="line">Desktop  Documents  Downloads  Music  Pictures  Public  Templates  Videos</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="显示文件隐藏属性" tabindex="-1"><a class="header-anchor" href="#显示文件隐藏属性"><span>显示文件隐藏属性</span></a></h2>
<p>使用<code v-pre>lsattr</code>命令来查看文件隐藏属性：<br>
<code v-pre>lsattr [-a -d -R] 文件或目录</code></p>
<ul>
<li><code v-pre>a</code>：将隐藏的文件属性也显示出来</li>
<li><code v-pre>d</code>：如果参数是目录，则仅列出目录本身的属性而不是其内部的文件。</li>
<li><code v-pre>R</code>：连同子目录的属性一并显示出来</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">[root@localhost miracles]# ls</span>
<span class="line">Desktop    Downloads  Pictures  Templates  Videos</span>
<span class="line">Documents  Music      Public    test</span>
<span class="line">[root@localhost miracles]# lsattr</span>
<span class="line">---------------- ./Desktop</span>
<span class="line">---------------- ./Downloads</span>
<span class="line">---------------- ./Templates</span>
<span class="line">---------------- ./Public</span>
<span class="line">---------------- ./Documents</span>
<span class="line">---------------- ./Music</span>
<span class="line">---------------- ./Pictures</span>
<span class="line">---------------- ./Videos</span>
<span class="line">----i----------- ./test</span>
<span class="line">[root@localhost miracles]# chattr -i test</span>
<span class="line">[root@localhost miracles]# lsattr</span>
<span class="line">---------------- ./Desktop</span>
<span class="line">---------------- ./Downloads</span>
<span class="line">---------------- ./Templates</span>
<span class="line">---------------- ./Public</span>
<span class="line">---------------- ./Documents</span>
<span class="line">---------------- ./Music</span>
<span class="line">---------------- ./Pictures</span>
<span class="line">---------------- ./Videos</span>
<span class="line">---------------- ./test</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


