<template><div><h1 id="压缩与解压" tabindex="-1"><a class="header-anchor" href="#压缩与解压"><span>压缩与解压</span></a></h1>
<h2 id="压缩格式" tabindex="-1"><a class="header-anchor" href="#压缩格式"><span>压缩格式</span></a></h2>
<ul>
<li>zip：Linux、Windows、MacOS，常用。</li>
<li>7zip：Windows常用</li>
<li>rar：Windows常用</li>
<li>tar：Linux、MacOS常用</li>
<li>gzip：Linux、MacOS常用</li>
</ul>
<h2 id="tar命令-压缩、解压" tabindex="-1"><a class="header-anchor" href="#tar命令-压缩、解压"><span>tar命令:压缩、解压</span></a></h2>
<p><code v-pre>tar</code>命令有很多选项：</p>
<ul>
<li><code v-pre>-c</code>：创建压缩文件，用于压缩模式。</li>
<li><code v-pre>-v</code>：显示压缩、解压过程，用于查看进度。</li>
<li><code v-pre>-x</code>：解压模式</li>
<li><code v-pre>-f</code>：要创建的文件或是要解压的文件，<code v-pre>-f</code>选项必须在所有选在中位置处于<strong>最后一个</strong>。</li>
<li><code v-pre>-z</code>：gzip模式，不适用<code v-pre>-z</code>就是普通的tarball格式。</li>
<li><code v-pre>-C</code>：选择解压的目的地，用于解压模式。</li>
</ul>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<ul>
<li><code v-pre>-z</code>选项如果要使用的话，一般处于选项第一个。</li>
<li><code v-pre>-f</code>选项必须位于最后一个。</li>
</ul>
</div>
<p>现在我将三个文件压缩在<code v-pre>test.tar</code>文件中</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">[miracles@192 ~]$ ls</span>
<span class="line">1.txt  3.txt    Documents  Music     Public     Videos</span>
<span class="line">2.txt  Desktop  Downloads  Pictures  Templates</span>
<span class="line">[miracles@192 ~]$ tar -cvf test.tar 1.txt 2.txt 3.txt</span>
<span class="line">1.txt</span>
<span class="line">2.txt</span>
<span class="line">3.txt</span>
<span class="line">[miracles@192 ~]$ ls</span>
<span class="line">1.txt  3.txt    Documents  Music     Public     test.tar</span>
<span class="line">2.txt  Desktop  Downloads  Pictures  Templates  Videos</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在我准备把<code v-pre>test.tar</code>解压到<code v-pre>test2</code>这个文件夹中</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">[miracles@192 ~]$ mkdir test2</span>
<span class="line">[miracles@192 ~]$ ls</span>
<span class="line">1.txt  Desktop    Music     Templates  Videos</span>
<span class="line">2.txt  Documents  Pictures  test2</span>
<span class="line">3.txt  Downloads  Public    test.tar</span>
<span class="line">[miracles@192 ~]$ tar -xvf test.tar -C test2</span>
<span class="line">1.txt</span>
<span class="line">2.txt</span>
<span class="line">3.txt</span>
<span class="line">[miracles@192 ~]$ cd test2</span>
<span class="line">[miracles@192 test2]$ ls</span>
<span class="line">1.txt  2.txt  3.txt</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning">
<p class="hint-container-title">注意</p>
<ul>
<li><code v-pre>-C</code>选项单独使用，要和解压所需的其他参数分开。</li>
</ul>
</div>
<h2 id="zip命令-压缩" tabindex="-1"><a class="header-anchor" href="#zip命令-压缩"><span>zip命令:压缩</span></a></h2>
<p>使用<code v-pre>zip</code>命令将文件压缩为<code v-pre>.zip</code>压缩包，语法如下：<br>
<code v-pre>zip [-r] 参数1 参数2 ... 参数N</code></p>
<ul>
<li><code v-pre>-r</code>：被压缩的包含文件夹时需要使用<code v-pre>-r</code></li>
</ul>
<p>现在将三个文件压缩至<code v-pre>test.zip</code>中</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">[miracles@192 ~]$ ls</span>
<span class="line">1.txt  3.txt    Documents  Music     Public     Videos</span>
<span class="line">2.txt  Desktop  Downloads  Pictures  Templates</span>
<span class="line">[miracles@192 ~]$ zip test.zip 1.txt  3.txt 2.txt</span>
<span class="line">  adding: 1.txt (stored 0%)</span>
<span class="line">  adding: 3.txt (stored 0%)</span>
<span class="line">  adding: 2.txt (stored 0%)</span>
<span class="line">[miracles@192 ~]$ ls</span>
<span class="line">1.txt  3.txt    Documents  Music     Public     test.zip</span>
<span class="line">2.txt  Desktop  Downloads  Pictures  Templates  Videos</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="unzip命令-解压" tabindex="-1"><a class="header-anchor" href="#unzip命令-解压"><span>unzip命令:解压</span></a></h2>
<p>现在把<code v-pre>test.zip</code>解压至<code v-pre>test2</code>中<br>
<code v-pre>unzip [-d] 参数</code></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">[miracles@192 ~]$ unzip test.zip -d test2</span>
<span class="line">Archive:  test.zip</span>
<span class="line"> extracting: test2/1.txt             </span>
<span class="line"> extracting: test2/3.txt             </span>
<span class="line"> extracting: test2/2.txt             </span>
<span class="line">[miracles@192 ~]$ ls</span>
<span class="line">1.txt  Desktop    Music     Templates  Videos</span>
<span class="line">2.txt  Documents  Pictures  test2</span>
<span class="line">3.txt  Downloads  Public    test.zip</span>
<span class="line">[miracles@192 ~]$ cd test2</span>
<span class="line">[miracles@192 test2]$ ls</span>
<span class="line">1.txt  2.txt  3.txt</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


