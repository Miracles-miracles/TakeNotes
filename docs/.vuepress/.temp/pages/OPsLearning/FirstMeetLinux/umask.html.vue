<template><div><h1 id="umask-文件默认权限" tabindex="-1"><a class="header-anchor" href="#umask-文件默认权限"><span>umask:文件默认权限</span></a></h1>
<p>我们可以修改一个文件或目录的属性，但是不知道一个文件或目录在创建时的“默认权限”，而<code v-pre>umask</code>就是指定目前用户和用户组在建立文件或目录时的默认权限值。</p>
<h2 id="查看默认权限" tabindex="-1"><a class="header-anchor" href="#查看默认权限"><span>查看默认权限</span></a></h2>
<p>查看默认权限有以下两种方式:</p>
<ul>
<li>直接使用<code v-pre>umask</code>命令，以数字形式显示权限值。</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">[miracles@localhost ~]$ umask</span>
<span class="line">0002</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container note">
<p class="hint-container-title">Note</p>
<p>权限值一般是三组数字，可是这里有四组，为什么？<br>
这是因为第一组是特殊权限用的，可以先不管它，直接看后三组。</p>
</div>
<div class="hint-container important">
<p class="hint-container-title">Important</p>
<p><code v-pre>umask</code>的数字指的是该默认值需要减掉的权限，也就是把这个权限拿走，剩下的才是真正的默认权限。<br>
由于<code v-pre>r--4 w--2 x--1</code>，那么<code v-pre>002</code>就表示用户什么也没拿走，用户组也是，其他用户拿走<code v-pre>2--w</code>即写权限。<br>
也就是说<code v-pre>u=rwx g=rwx o=rx</code>
看看和下面的<code v-pre>umask -S</code>能不能对上吧</p>
</div>
<ul>
<li>使用命令+选项：<code v-pre>umask -S</code>，以符号形式显示权限。</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">[miracles@localhost ~]$ umask -S</span>
<span class="line">u=rwx,g=rwx,o=rx</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container note">
<p class="hint-container-title">Note</p>
<p>很显然，<code v-pre>u=rwx,g=rwx,o=rx</code>和上面的<code v-pre>775</code>是对应的。</p>
</div>
<h2 id="修改默认权限" tabindex="-1"><a class="header-anchor" href="#修改默认权限"><span>修改默认权限</span></a></h2>
<p>如何重新设置默认权限呢？只需要输入<code v-pre>umask</code>然后加上权限数字即可。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">[miracles@localhost ~]$ umask</span>
<span class="line">0002</span>
<span class="line">[miracles@localhost ~]$ umask 022</span>
<span class="line">[miracles@localhost ~]$ umask</span>
<span class="line">0022</span>
<span class="line">[miracles@localhost ~]$ umask 002</span>
<span class="line">[miracles@localhost ~]$ umask</span>
<span class="line">0002</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


