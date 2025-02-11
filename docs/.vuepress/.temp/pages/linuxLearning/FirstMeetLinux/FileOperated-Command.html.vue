<template><div><h2 id="touch命令" tabindex="-1"><a class="header-anchor" href="#touch命令"><span>touch命令</span></a></h2>
<p>touch命令用于创建<strong>文件</strong>而不是<strong>文件夹（目录）</strong>，该命令语法如下：<br>
<code v-pre>touch Linux路径</code></p>
<ul>
<li>touch命令无选项，参数必填，表示要创建的文件路径，相对、绝对、特殊路径符均可使用。</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">[miracles@192 ~]$ ls</span>
<span class="line">Desktop    Downloads  Music     Public     test</span>
<span class="line">Documents  itcast     Pictures  Templates  Videos</span>
<span class="line">[miracles@192 ~]$ cd test</span>
<span class="line">[miracles@192 test]$ touch hello.txt</span>
<span class="line">[miracles@192 test]$ ls</span>
<span class="line">hello.txt</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br>
<h2 id="cat命令" tabindex="-1"><a class="header-anchor" href="#cat命令"><span>cat命令</span></a></h2>
<p>cat命令用于查看文件内容，现在查看刚才创建的<code v-pre>hello.txt</code>文件：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">[miracles@192 test]$ cat hello.txt</span>
<span class="line">[miracles@192 test]$ </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，这个文件里面什么都没有。接下来，我将在文件中写入<code v-pre>Hello Linux</code>，然后再用<code v-pre>cat</code>查看。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">[miracles@192 test]$ cat hello.txt</span>
<span class="line">Hello Linux</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><br>
<h2 id="more命令" tabindex="-1"><a class="header-anchor" href="#more命令"><span>more命令</span></a></h2>
<p>more命令也可以查看文件内容，但是于<code v-pre>cat</code>不同的是：</p>
<ul>
<li><code v-pre>cat</code>是直接将内容全部显示出来。</li>
<li><code v-pre>more</code>支持翻页，如果文件内容过多，可以一页页地展示。<br>
语法：<code v-pre>more Linux路径</code></li>
<li>该命令没有选项，只有必填参数，参数表示被查看的文件路径，相对、绝对、特殊路径符都可以使用。
<br></li>
</ul>
<h2 id="cp命令" tabindex="-1"><a class="header-anchor" href="#cp命令"><span>cp命令</span></a></h2>
<p>cp命令用于复制文件/文件夹，该命令源于<strong>copy</strong>，其语法如下：<br>
<code v-pre>cp [-r] 参数1 参数2</code></p>
<ul>
<li><code v-pre>-r</code>：选项可选，用于复制文件夹使用，表示递归。</li>
<li><code v-pre>参数1</code>：Linux路径，表示被复制的文件夹或文件。</li>
<li><code v-pre>参数2</code>：Linux路径，表示要复制去的地方。</li>
</ul>
<p>现在我要把test文件夹中的hello.txt文件复制到itcast文件夹中。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">[miracles@192 ~]$ cp test/hello.txt itcast</span>
<span class="line">[miracles@192 ~]$ ls itcast</span>
<span class="line">good  hello.txt</span>
<span class="line">[miracles@192 ~]$ cat itcast/hello.txt</span>
<span class="line">Hello Linux</span>
<span class="line">[miracles@192 ~]$ cat test/hello.txt</span>
<span class="line">Hello Linux</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br>
<h2 id="mv命令" tabindex="-1"><a class="header-anchor" href="#mv命令"><span>mv命令</span></a></h2>
<p>mv命令用于移动文件/文件夹，该命令来自<strong>move</strong>，语法如下：<br>
<code v-pre>mv 参数1 参数</code></p>
<ul>
<li><code v-pre>参数1</code>：Linux路径，表示被移动的文件或文件夹。</li>
<li><code v-pre>参数2</code>：Linux路径，表示要去的地方。如果目标不存在，则改名确保目标存在。</li>
</ul>
<p>接下来，我要把itcast文件夹中的good文件夹移动到test文件夹中。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">[miracles@192 ~]$ mv itcast/good test</span>
<span class="line">[miracles@192 ~]$ cd itcast</span>
<span class="line">[miracles@192 itcast]$ ls</span>
<span class="line">hello.txt</span>
<span class="line">[miracles@192 itcast]$ cd</span>
<span class="line">[miracles@192 ~]$ cd test</span>
<span class="line">[miracles@192 test]$ ls</span>
<span class="line">good  hello.txt</span>
<span class="line">[miracles@192 test]$ ls good</span>
<span class="line">666</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br>
<h2 id="rm命令" tabindex="-1"><a class="header-anchor" href="#rm命令"><span>rm命令</span></a></h2>
<p>rm命令用于删除文件/文件夹，该命令来自<strong>remove</strong>，语法如下：<br>
<code v-pre>rm [-r -f] 参数1 参数2 ...... 参数N</code></p>
<ul>
<li><code v-pre>-r</code>：该选项用于删除文件夹。</li>
<li><code v-pre>-f</code>：表示<strong>force</strong>，即强制性的删除。</li>
<li><code v-pre>参数1 参数2 ...... 参数N</code>：表示要删除的文件或文件夹路径，按照空格隔开。</li>
</ul>
<p>现在我要删除test和itcast文件夹。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">[miracles@192 ~]$ ls</span>
<span class="line">Desktop    Downloads  Music     Public     test</span>
<span class="line">Documents  itcast     Pictures  Templates  Videos</span>
<span class="line">[miracles@192 ~]$ rm -r test itcast</span>
<span class="line">[miracles@192 ~]$ ls</span>
<span class="line">Desktop    Downloads  Pictures  Templates</span>
<span class="line">Documents  Music      Public    Videos</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br>
<h2 id="通配符" tabindex="-1"><a class="header-anchor" href="#通配符"><span>通配符</span></a></h2>
<p>通配符<code v-pre>*</code>可以配合<code v-pre>rm</code>命令一起使用，以此来进行模糊删除。下面是几个示例：</p>
<ul>
<li><code v-pre>test*</code>：表示匹配任何以<code v-pre>test</code>开头的内容。</li>
<li><code v-pre>*test</code>：表示匹配任何以<code v-pre>test</code>结尾的内容。</li>
<li><code v-pre>*test*</code>：表示匹配任何包含<code v-pre>test</code>的内容。</li>
</ul>
<p><strong>开管理员谨慎使用<code v-pre>rm -rf /*</code>，小心去局子里喝茶。</strong></p>
</div></template>


