<template><div><h1 id="软件安装" tabindex="-1"><a class="header-anchor" href="#软件安装"><span>软件安装</span></a></h1>
<h2 id="各系统安装一览" tabindex="-1"><a class="header-anchor" href="#各系统安装一览"><span>各系统安装一览</span></a></h2>
<ul>
<li>win系统：
<ul>
<li>自行安装：使用<code v-pre>.exe</code>、<code v-pre>.msi</code>文件</li>
<li>软件商店：Microsoft Store</li>
</ul>
</li>
<li>mac系统：
<ul>
<li>自行安装：使用<code v-pre>.dmg</code>、<code v-pre>.pkg</code>文件</li>
<li>软件商店：AppStore</li>
</ul>
</li>
</ul>
<p>Linux也支持这两种方式，它使用的安装包后缀一般为<code v-pre>.rpm</code>。</p>
<h2 id="使用yum命令安装软件" tabindex="-1"><a class="header-anchor" href="#使用yum命令安装软件"><span>使用yum命令安装软件</span></a></h2>
<p><code v-pre>yum</code>是<code v-pre>.rpm</code>包软件管理器，用于自动化安装配置Linux软件，并可以自动解决以来问题。语法如下：<br>
<code v-pre>yum [-y] [install | remove | search] 软件名称</code></p>
<ul>
<li><code v-pre>-y</code>：自动确认，无需手动确认安装或卸载过程。</li>
<li><code v-pre>install</code>：安装。</li>
<li><code v-pre>remove</code>：卸载。</li>
<li><code v-pre>search</code>：搜索。</li>
</ul>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p><code v-pre>yum</code>命令使用不了或者有报错的小伙伴看过来！</p>
<p><strong>记得先root</strong></p>
<p><strong>CentOS 7</strong><br>
<strong>1. 备份</strong></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>2. 下载新的 CentOS-Base.repo 到 /etc/yum.repos.d/</strong></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">wget -O /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-7.repo</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>或者</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">curl -o /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-7.repo</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>3. 运行 <code v-pre>yum makecache</code> 生成缓存</strong></p>
</div>
</div></template>


