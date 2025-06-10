import{_ as s,c as n,a as i,o as a}from"./app-DFizdBth.js";const l={};function d(c,e){return a(),n("div",null,e[0]||(e[0]=[i(`<h1 id="whcih-find查找命令" tabindex="-1"><a class="header-anchor" href="#whcih-find查找命令"><span>whcih-find查找命令</span></a></h1><h2 id="which命令-找程序" tabindex="-1"><a class="header-anchor" href="#which命令-找程序"><span>which命令:找程序</span></a></h2><p>Linux的命令实际上就是二进制的可执行程序，这个跟Windows的<code>.exe</code>文件是一个意思。 which命令就是用来查看一系列命令的程序文件在哪里，它的语法如下：<br><code>which 要查找的命令</code></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">[miracles@192 ~]$ which cd</span>
<span class="line">/usr/bin/cd</span>
<span class="line">[miracles@192 ~]$ which pwd</span>
<span class="line">/usr/bin/pwd</span>
<span class="line">[miracles@192 ~]$ which touch</span>
<span class="line">/usr/bin/touch</span>
<span class="line">[miracles@192 ~]$ which mkdir</span>
<span class="line">/usr/bin/mkdir</span>
<span class="line">[miracles@192 ~]$ which cp</span>
<span class="line">/usr/bin/cp</span>
<span class="line">[miracles@192 ~]$ which mv</span>
<span class="line">/usr/bin/mv</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="find命令-找文件" tabindex="-1"><a class="header-anchor" href="#find命令-找文件"><span>find命令:找文件</span></a></h2><p>find命令用于查找文件，可以按文件名查找，也可以按文件大小查找，也可进行模糊查找。</p><h3 id="按文件名查找" tabindex="-1"><a class="header-anchor" href="#按文件名查找"><span>按文件名查找</span></a></h3><p><code>find 起始路径 -name &quot;被查找文件名&quot;</code></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">[miracles@192 ~]$ su - root</span>
<span class="line">Password: </span>
<span class="line">Last login: Mon Feb 10 10:13:41 CST 2025 on pts/0</span>
<span class="line">[root@192 ~]# find / -name &quot;test&quot;</span>
<span class="line">find: ‘/run/user/1000/gvfs’: Permission denied</span>
<span class="line">/usr/bin/test</span>
<span class="line">/usr/lib/modules/3.10.0-957.el7.x86_64/kernel/drivers/ntb/test</span>
<span class="line">/usr/lib/alsa/init/test</span>
<span class="line">/usr/lib64/python2.7/test</span>
<span class="line">/usr/lib64/python2.7/unittest/test</span>
<span class="line">/usr/share/espeak-data/voices/test</span>
<span class="line">/usr/src/kernels/3.10.0-957.el7.x86_64/drivers/ntb/test</span>
<span class="line">/usr/src/kernels/3.10.0-957.el7.x86_64/include/config/test</span>
<span class="line">/usr/src/kernels/3.10.0-957.el7.x86_64/lib/raid6/test</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="按大小查找" tabindex="-1"><a class="header-anchor" href="#按大小查找"><span>按大小查找</span></a></h3><p><code>find 起始路径 -size +|-n[kMG]</code></p><ul><li><code>+</code>、<code>-</code>表示大于和小于。</li><li><code>n</code>表示大小数字。</li><li><code>kMG</code>表示大小单位，分别是<code>kb</code>、<code>MB</code>、<code>GB</code>。</li></ul><h3 id="模糊查找" tabindex="-1"><a class="header-anchor" href="#模糊查找"><span>模糊查找</span></a></h3><p><code>find 起始路径 -name &quot;被查找文件名&quot;</code></p><p>以下是通配符的几个示例：</p><ul><li><code>test*</code>：表示匹配任何以<code>test</code>开头的内容。</li><li><code>*test</code>：表示匹配任何以<code>test</code>结尾的内容。</li><li><code>*test*</code>：表示匹配任何包含<code>test</code>的内容。</li></ul>`,18)]))}const t=s(l,[["render",d],["__file","which-find-Command.html.vue"]]),p=JSON.parse('{"path":"/Sundry/FirstMeetLinux/which-find-Command.html","title":"whcih-find查找命令","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"which命令:找程序","slug":"which命令-找程序","link":"#which命令-找程序","children":[]},{"level":2,"title":"find命令:找文件","slug":"find命令-找文件","link":"#find命令-找文件","children":[{"level":3,"title":"按文件名查找","slug":"按文件名查找","link":"#按文件名查找","children":[]},{"level":3,"title":"按大小查找","slug":"按大小查找","link":"#按大小查找","children":[]},{"level":3,"title":"模糊查找","slug":"模糊查找","link":"#模糊查找","children":[]}]}],"git":{"updatedTime":1745815790000,"contributors":[{"name":"Miracles-miracles","username":"Miracles-miracles","email":"2663284851@qq.com","commits":5,"url":"https://github.com/Miracles-miracles"}]},"filePathRelative":"Sundry/FirstMeetLinux/which-find-Command.md"}');export{t as comp,p as data};
