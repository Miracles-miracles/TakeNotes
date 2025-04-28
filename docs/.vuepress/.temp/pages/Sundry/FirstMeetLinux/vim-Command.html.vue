<template><div><h1 id="vim编辑器" tabindex="-1"><a class="header-anchor" href="#vim编辑器"><span>vim编辑器</span></a></h1>
<h2 id="vim的三种工作模式" tabindex="-1"><a class="header-anchor" href="#vim的三种工作模式"><span>vim的三种工作模式</span></a></h2>
<ul>
<li>命令模式(Command mode)：在该模式下，所有按键都被理解为命令，以命令驱动执行不同的功能，这时不能自由进行文本编辑。</li>
<li>输入模式(Insert mode)：在该模式下，可以对文件内容进行自由编辑。</li>
<li>底线命令模式(Last line mode)：以<code v-pre>:</code>开始，通常用于文件的保存、退出。</li>
</ul>
<h3 id="命令模式" tabindex="-1"><a class="header-anchor" href="#命令模式"><span>命令模式</span></a></h3>
<p>如果需要通过<code v-pre>vim</code>编辑文件，则需要通过如下命令：<br>
<code v-pre>vim 文件路径</code></p>
<ul>
<li>若文件路径表示的文件不存在，那么该命令会用于编辑新的文件。</li>
<li>若文件路径表示的文件存在，那么该命令会用于编辑已有文件。</li>
</ul>
<h3 id="底线命令模式" tabindex="-1"><a class="header-anchor" href="#底线命令模式"><span>底线命令模式</span></a></h3>
<ul>
<li>使用<code v-pre>Esc</code>可以退回到命令模式。</li>
<li>在命令模式内，输入<code v-pre>:</code>进入底线命令模式。</li>
</ul>
<p><strong>编辑模式没什么好说的。关于命令模式和底线命令模式，它们有很多快捷键，<a href="https://www.runoob.com/linux/linux-vim.html" target="_blank" rel="noopener noreferrer">想要了解的点这里哦</a>。</strong></p>
</div></template>


