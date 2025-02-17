<template><div><h1 id="初次使用git" tabindex="-1"><a class="header-anchor" href="#初次使用git"><span>初次使用Git</span></a></h1>
<h2 id="判断是否安装成功" tabindex="-1"><a class="header-anchor" href="#判断是否安装成功"><span>判断是否安装成功</span></a></h2>
<p>使用命令<code v-pre>git -v</code>可以查看你当前安装的Git版本，以此判断是否安装成功。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">$ git -v</span>
<span class="line">git version 2.47.1.windows.2</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="完善用户信息" tabindex="-1"><a class="header-anchor" href="#完善用户信息"><span>完善用户信息</span></a></h2>
<p>安装完 Git 之后，要做的第一件事就是设置你的用户名和邮件地址。这一点很重要，因为每一个 Git 提交都会使用这些信息，它们会写入到你的每一次提交中，不可更改：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">git config --global user.name "John Doe"</span>
<span class="line">git config --global user.email johndoe@example.com</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>你应该在“Jonh Doe”处填写自己的名字，我使用的是GitHub上注册的昵称；还应该在“johndoe@example.com”处填写自己的邮箱，我这里填写的是自己的QQ邮箱，同样的，这也是我注册GitHub所有的邮箱。</p>
</div>
<h2 id="检查配置信息" tabindex="-1"><a class="header-anchor" href="#检查配置信息"><span>检查配置信息</span></a></h2>
<p>可以使用命令<code v-pre>git config --list</code>，这时Git会列出当时所有配置信息。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">$ git config --list</span>
<span class="line">diff.astextplain.textconv=astextplain</span>
<span class="line">filter.lfs.clean=git-lfs clean -- %f</span>
<span class="line">filter.lfs.smudge=git-lfs smudge -- %f</span>
<span class="line">filter.lfs.process=git-lfs filter-process</span>
<span class="line">filter.lfs.required=true</span>
<span class="line">http.sslbackend=openssl</span>
<span class="line">http.sslcainfo=D:/Git/Git/mingw64/etc/ssl/certs/ca-bundle.crt</span>
<span class="line">core.autocrlf=true</span>
<span class="line">core.fscache=true</span>
<span class="line">core.symlinks=false</span>
<span class="line">pull.rebase=false</span>
<span class="line">credential.helper=manager</span>
<span class="line">credential.https://dev.azure.com.usehttppath=true</span>
<span class="line">init.defaultbranch=master</span>
<span class="line">user.email=2663284851@qq.com</span>
<span class="line">user.name=Miracles-miracles</span>
<span class="line">core.repositoryformatversion=0</span>
<span class="line">core.filemode=false</span>
<span class="line">core.bare=false</span>
<span class="line">core.logallrefupdates=true</span>
<span class="line">core.symlinks=false</span>
<span class="line">core.ignorecase=true</span>
<span class="line">remote.origin.url=git@github.com:Miracles-miracles/TakeNotes.git</span>
<span class="line">:</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在末尾<code v-pre>:</code>处按<code v-pre>Q</code>退出</p>
<p>很显然，在这些配置信息中有很大一部分你都看不懂，不过这三条你一定很熟悉：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">user.email=2663284851@qq.com</span>
<span class="line">user.name=Miracles-miracles</span>
<span class="line">remote.origin.url=git@github.com:Miracles-miracles/</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>前两条分别是你的名字和邮箱，第三条则是Git对你的GitHub账户的远程连接，这在后面的章节会遇到。如果你恰好遇到了这个问题，那么就使用搜索框搜索吧。</p>
</div></template>


