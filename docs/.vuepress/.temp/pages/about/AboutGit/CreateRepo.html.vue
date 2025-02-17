<template><div><h1 id="创建git仓库" tabindex="-1"><a class="header-anchor" href="#创建git仓库"><span>创建Git仓库</span></a></h1>
<h2 id="git-init-在已存在目录中初始化仓库" tabindex="-1"><a class="header-anchor" href="#git-init-在已存在目录中初始化仓库"><span>git init:在已存在目录中初始化仓库</span></a></h2>
<p>例如，我现在为项目在D盘中新建一个文件夹叫<code v-pre>TakeNotes</code>，为了在该目录中创建仓库，我需要先<code v-pre>cd TakeNotes</code>切换工作目录到该目录下。随后使用<code v-pre>git init</code>命令。</p>
<p>在使用<code v-pre>git init</code>命令后，执行<code v-pre>ls -al</code>，你就会发现一个<code v-pre>.git</code>文件。该文件是隐藏的，估计是怕你不小心修改了，事实上你最好不要乱动它，不然会出现一些错误导致不能正常使用。</p>
<h2 id="git-clone-克隆现有仓库" tabindex="-1"><a class="header-anchor" href="#git-clone-克隆现有仓库"><span>git clone:克隆现有仓库</span></a></h2>
<p>如果在GitHub上已经有了仓库，可以选择将该仓库项目直接克隆至本地。为了实现克隆仓库，可以使用ssh远程链接，具体命令是<code v-pre>git clone+ssh链接</code>。如果使用ssh远程，则还需要配置ssh公钥，接下来将介绍如何生成ssh公钥。</p>
<h3 id="生成ssh公钥" tabindex="-1"><a class="header-anchor" href="#生成ssh公钥"><span>生成ssh公钥</span></a></h3>
<ol>
<li>检查本地主机是否存在ssh密钥</li>
</ol>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">谈朝伟@Miracles MINGW64 /d/Coding Time/TakeNotes (main)</span>
<span class="line">$ cd ~/.ssh</span>
<span class="line"></span>
<span class="line">谈朝伟@Miracles MINGW64 ~/.ssh</span>
<span class="line">$ ls</span>
<span class="line">id_rsa  id_rsa.pub  known_hosts  known_hosts.old</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到我这里有<code v-pre>id_rsa</code>和<code v-pre>id_rsa.pub</code>，这就说明我的本地存在ssh公钥，其中<code v-pre>.pub</code>的就是。</p>
<ol start="2">
<li>若不存在ssh公钥</li>
</ol>
<ul>
<li>生成ssh公钥，执行以下指令：<br>
<code v-pre>ssh-keygen -t rsa -C &quot;xxx@xxx.com&quot;</code><br>
随后一路回车即可</li>
</ul>
<ol start="3">
<li>查看ssh公钥</li>
</ol>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">谈朝伟@Miracles MINGW64 /d/Coding Time/TakeNotes (main)</span>
<span class="line">$ cd ~/.ssh</span>
<span class="line"></span>
<span class="line">谈朝伟@Miracles MINGW64 ~/.ssh</span>
<span class="line">$ cat id_rsa.pub</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里的公钥我就不展示了，执行命令后将公钥全部复制。</p>
<ol start="4">
<li>在GitHub上添加ssh公钥</li>
</ol>
<ul>
<li>点击自己的头像，单击“Settings”。</li>
<li>选择“SSH and GPG keys”，单击右侧的“New SSH key”。</li>
</ul>
<p>完成之后就可以自由的clone和push了。<strong>不过要注意，之后在克隆仓库的时候要选择ssh的url而不是https</strong>。</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p><a href="https://blog.csdn.net/weixin_42310154/article/details/118340458?spm=1001.2014.3001.5506" target="_blank" rel="noopener noreferrer">关于验证原理和为什么要配置ssh公钥可以看这里</a></p>
</div>
</div></template>


