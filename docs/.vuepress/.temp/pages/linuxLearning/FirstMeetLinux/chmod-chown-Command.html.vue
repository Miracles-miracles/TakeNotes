<template><div><h1 id="chmod-chown-修改权限与所属" tabindex="-1"><a class="header-anchor" href="#chmod-chown-修改权限与所属"><span>chmod-chown:修改权限与所属</span></a></h1>
<h2 id="chmod命令" tabindex="-1"><a class="header-anchor" href="#chmod命令"><span>chmod命令</span></a></h2>
<p>chmod命令可以修改文件、文件夹的权限信息，<strong>不过，只有文件、文件夹的所属用户或root用户可以修改</strong>。语法如下：<br>
<code v-pre>chmod [-R] 权限 文件或文件夹</code></p>
<ul>
<li><code v-pre>-R</code>：对文件夹内的全部内容应用同样的操作。</li>
<li><code v-pre>权限</code>：即<code v-pre>rwx</code>，分别为用户、用户组和其他用户单独设定，如<code v-pre>u=rwx,g=rx,o=x</code>。</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">[miracles@192 ~]$ ls -l test.txt</span>
<span class="line">-rw-rw-r--. 1 miracles miracles 26 Feb 11 09:55 test.txt</span>
<span class="line">[miracles@192 ~]$ chmod o=rw test.txt</span>
<span class="line">[miracles@192 ~]$ ls -l test.txt</span>
<span class="line">-rw-rw-rw-. 1 miracles miracles 26 Feb 11 09:55 test.txt</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里我把test.txt文件其他用户的权限从<code v-pre>r--</code>改成了<code v-pre>rw-</code>。</p>
<h3 id="权限的数字序号" tabindex="-1"><a class="header-anchor" href="#权限的数字序号"><span>权限的数字序号</span></a></h3>
<p>权限可以用3位数字代表，第一位数字表示用户权限，第二位表示用户组权限，第三位表示其他用户权限。</p>
<p>数字的细节如下：<code v-pre>r</code>记为4，<code v-pre>w</code>记为2，<code v-pre>x</code>记为1，可以有：</p>
<ul>
<li>0：无任何权限，即<code v-pre>---</code>。</li>
<li>1：仅有<code v-pre>x</code>权限，即<code v-pre>--x</code>。</li>
<li>2：仅有<code v-pre>w</code>权限，即<code v-pre>-w-</code>。</li>
<li>3：有<code v-pre>w</code>和<code v-pre>x</code>权限，即<code v-pre>-wx</code>。</li>
<li>4：仅有<code v-pre>r</code>权限，即<code v-pre>r--</code>。</li>
<li>5：有<code v-pre>r</code>和<code v-pre>x</code>权限，即<code v-pre>r-x</code>。</li>
<li>6：有<code v-pre>r</code>和<code v-pre>w</code>权限，即<code v-pre>rw-</code>。</li>
<li>7：有全部权限，即<code v-pre>rwx</code>。</li>
</ul>
<h2 id="chown命令" tabindex="-1"><a class="header-anchor" href="#chown命令"><span>chown命令</span></a></h2>
<p>chown命令可以修改文件、文件夹的所属用户和用户组，<strong>不过，普通用户无法修改所属为其他用户或组，所以此命令只适用于root用户执行</strong>。语法如下：<br>
<code v-pre>chown [-R] [用户][:][用户组] 文件或文件夹</code></p>
<ul>
<li><code v-pre>-R</code>：对文件夹内的全部内容应用同样的操作。</li>
<li><code v-pre>用户</code>：修改所属用户。</li>
<li><code v-pre>:</code>：用于分隔用户和用户组。</li>
<li><code v-pre>用户组</code>：修改所属用户组。</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">[miracles@192 ~]$ ls -l test.txt</span>
<span class="line">-rw-rw-rw-. 1 miracles miracles 26 Feb 11 09:55 test.txt</span>
<span class="line">[miracles@192 ~]$ chown :root test.txt</span>
<span class="line">chown: changing group of ‘test.txt’: Operation not permitted</span>
<span class="line">[miracles@192 ~]$ sudo chown :root test.txt</span>
<span class="line">[miracles@192 ~]$ ls -l test.txt</span>
<span class="line">-rw-rw-rw-. 1 miracles root 26 Feb 11 09:55 test.txt</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里我把所属组从miracles改成root了。</p>
</div></template>


