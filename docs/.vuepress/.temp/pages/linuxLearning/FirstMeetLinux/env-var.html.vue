<template><div><h1 id="环境变量" tabindex="-1"><a class="header-anchor" href="#环境变量"><span>环境变量</span></a></h1>
<h2 id="env命令-查看环境变量" tabindex="-1"><a class="header-anchor" href="#env命令-查看环境变量"><span>env命令:查看环境变量</span></a></h2>
<p>执行<code v-pre>env</code>就能查看环境变量，它是一种<code v-pre>KeyValue</code>型的键值对。</p>
<h2 id="path" tabindex="-1"><a class="header-anchor" href="#path"><span>PATH</span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">[miracles@192 ~]$ env | grep PATH</span>
<span class="line">PATH=/usr/local/bin:/usr/bin:/usr/local/sbin:/usr/sbin:/home/miracles/.local/bin:/home/miracles/bin</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>当执行任何命令时，都会按照顺序从上述路径中搜索到要执行的程序的本体。</p>
<h2 id="符号" tabindex="-1"><a class="header-anchor" href="#符号"><span>$符号</span></a></h2>
<p>在Linux系统中，<code v-pre>$</code>符号被用于取“变量”的值。
取得环境变量的值可以使用<code v-pre>$环境变量名</code>来取得</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">[miracles@192 ~]$ echo $PATH</span>
<span class="line">/usr/local/bin:/usr/bin:/usr/local/sbin:/usr/sbin:/home/miracles/.local/bin:/home/miracles/bin</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设置环境变量" tabindex="-1"><a class="header-anchor" href="#设置环境变量"><span>设置环境变量</span></a></h2>
<ul>
<li>临时设置：<code v-pre>export 变量名=变量值</code></li>
<li>永久生效：
<ul>
<li>针对当前用户生效，配置在当前用户的<code v-pre>~/bashrc</code>文件中。</li>
<li>针对所用用户生效，配置在系统的<code v-pre>/etc/profile</code>文件中，并通过<code v-pre>source</code>配置文件，立刻生效，或重新登录生效。</li>
</ul>
</li>
</ul>
</div></template>


