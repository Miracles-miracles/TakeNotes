import{_ as e,c as i,a as l,o as n}from"./app-93NNY72X.js";const a={};function r(c,s){return n(),i("div",null,s[0]||(s[0]=[l(`<h1 id="进程管理" tabindex="-1"><a class="header-anchor" href="#进程管理"><span>进程管理</span></a></h1><h2 id="ps命令-查看进程" tabindex="-1"><a class="header-anchor" href="#ps命令-查看进程"><span>ps命令:查看进程</span></a></h2><p>使用<code>ps</code>命令查看Linux系统中的进程，语法：<br><code>ps [-e -f]</code></p><ul><li><code>-e</code>：显示出全部的进程</li><li><code>-f</code>：以完全格式化的形式展示信息</li></ul><p>以下内容仅展示部分信息：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">[miracles@192 ~]$ ps -ef</span>
<span class="line">UID         PID   PPID  C STIME TTY          TIME CMD</span>
<span class="line">root          1      0  0 16:16 ?        00:00:05 /usr/lib/syst</span>
<span class="line">root          2      0  0 16:16 ?        00:00:00 [kthreadd]</span>
<span class="line">root          3      2  0 16:16 ?        00:00:03 [ksoftirqd/0]</span>
<span class="line">root          5      2  0 16:16 ?        00:00:00 [kworker/0:0H</span>
<span class="line">root          7      2  0 16:16 ?        00:00:00 [migration/0]</span>
<span class="line">root          8      2  0 16:16 ?        00:00:00 [rcu_bh]</span>
<span class="line">root          9      2  0 16:16 ?        00:00:01 [rcu_sched]</span>
<span class="line">root         10      2  0 16:16 ?        00:00:00 [lru-add-drai</span>
<span class="line">root         11      2  0 16:16 ?        00:00:00 [watchdog/0]</span>
<span class="line">root         13      2  0 16:16 ?        00:00:00 [kdevtmpfs]</span>
<span class="line">root         14      2  0 16:16 ?        00:00:00 [netns]</span>
<span class="line">root         15      2  0 16:16 ?        00:00:00 [khungtaskd]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">解释</p><ul><li>UID：进程所属的用户ID</li><li>PID：进程的进程号ID</li><li>PPID：进程的父ID</li><li>C：此进程的CPU占用率</li><li>STIME：进程的启动时间</li><li>TTY：启动此进程的终端序号</li><li>TIME：进程占用CPU的时间</li><li>CMD：进程对应的名称或启动路径或启动命令</li></ul></div><h2 id="kill命令-关闭进程" tabindex="-1"><a class="header-anchor" href="#kill命令-关闭进程"><span>kill命令:关闭进程</span></a></h2><p>kill语法：<br><code>kill [-9] 进程ID</code></p><ul><li><code>-9</code>：表示强制关闭进程</li></ul>`,10)]))}const d=e(a,[["render",r],["__file","process.html.vue"]]),o=JSON.parse('{"path":"/OPsLearning/FirstMeetLinux/process.html","title":"进程管理","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"ps命令:查看进程","slug":"ps命令-查看进程","link":"#ps命令-查看进程","children":[]},{"level":2,"title":"kill命令:关闭进程","slug":"kill命令-关闭进程","link":"#kill命令-关闭进程","children":[]}],"git":{"updatedTime":1742653323000,"contributors":[{"name":"Miracles-miracles","username":"Miracles-miracles","email":"2663284851@qq.com","commits":2,"url":"https://github.com/Miracles-miracles"}]},"filePathRelative":"OPsLearning/FirstMeetLinux/process.md"}');export{d as comp,o as data};
