<template><div><h1 id="第一个shell脚本" tabindex="-1"><a class="header-anchor" href="#第一个shell脚本"><span>第一个shell脚本</span></a></h1>
<p>新建一个文本，其名后缀为<code v-pre>.sh</code>，随后进入编写文件即可。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">#!/bin/bash</span>
<span class="line">echo "Hello World !"</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container note">
<p class="hint-container-title">Note</p>
<p><code v-pre>#!</code>是一种标记，它告诉系统需要哪种解释器来执行。</p>
<p>要执行该脚本文件，需要查看其是否有可执行权限，如果没有则要手动添加可执行的权限。执行时要写成这样：<br>
<code v-pre>./test.sh</code>
如果写成<code v-pre>test.sh</code>，则linux会去PATH中找，而当前目录通常不在PATH中，所以写成<code v-pre>./test.sh</code>是告诉linux直接在当前目录找文件执行。</p>
</div>
</div></template>


