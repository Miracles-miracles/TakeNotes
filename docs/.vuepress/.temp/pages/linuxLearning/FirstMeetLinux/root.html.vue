<template><div><h1 id="认识root用户" tabindex="-1"><a class="header-anchor" href="#认识root用户"><span>认识root用户</span></a></h1>
<h2 id="su命令" tabindex="-1"><a class="header-anchor" href="#su命令"><span>su命令</span></a></h2>
<p>使用<code v-pre>su - root</code>可以切换到<code v-pre>root</code>用户，那是因为<code v-pre>su</code>命令就是用于账户切换的命令，其来源于<strong>Switch User</strong>，语法如下：<br>
<code v-pre>su [-] [用户名]</code></p>
<ul>
<li><code v-pre>-</code>符号是可选的，表示是否在切换用户后加载环境变量，<strong>一般建议带上</strong>。</li>
<li><code v-pre>用户名</code>表示要切换到的用户，<code v-pre>用户名</code>也可以省略，省略的话表示切换到<code v-pre>root</code>。</li>
<li>使用普通用户切换到其他用户需要输入密码，若使用<code v-pre>root</code>用户则不用。</li>
<li>切换用户后，使用<code v-pre>exit</code>命令退回到上一个用户，也可以使用<code v-pre>ctrl d</code>。</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">[miracles@192 ~]$ su - root</span>
<span class="line">Password: </span>
<span class="line">Last login: Mon Feb 10 19:43:26 CST 2025 on pts/1</span>
<span class="line">[root@192 ~]# exit</span>
<span class="line">logout</span>
<span class="line">[miracles@192 ~]$ </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br>
<h2 id="sudo命令" tabindex="-1"><a class="header-anchor" href="#sudo命令"><span>sudo命令</span></a></h2>
<p>虽然可以<code v-pre>root</code>，但是不建议。不过可以使用<code v-pre>sudo</code>命令为普通命令授权，临时以<code v-pre>root</code>身份执行，其语法如下：<br>
<code v-pre>sudo 其他命令</code></p>
<ul>
<li>在其他命令之前带上<code v-pre>sudo</code>，即可为这条命令临时赋予root权限。</li>
</ul>
<h3 id="为普通用户配置sudo认证" tabindex="-1"><a class="header-anchor" href="#为普通用户配置sudo认证"><span>为普通用户配置sudo认证</span></a></h3>
<ul>
<li>切换至root用户，执行<code v-pre>visudo</code>命令，这样系统会自动通过<code v-pre>vi</code>编辑器打开<code v-pre>/etc/sudoer</code>。</li>
<li>在文件的最后添加：<code v-pre>miracles ALL=(ALL)   NOPASSWD:ALL</code>。</li>
</ul>
<p><strong><code v-pre>miracles</code>是我自己的用户名，你应该写你自己的。</strong></p>
<ul>
<li>最后使用<code v-pre>wq</code>保存并退出即可。</li>
</ul>
<p>完成后就可以无障碍使用<code v-pre>sudo</code>命令啦。</p>
</div></template>


