import{_ as s,c as a,a as n,o as i}from"./app-DFizdBth.js";const l={};function c(d,e){return i(),a("div",null,e[0]||(e[0]=[n(`<h1 id="路径" tabindex="-1"><a class="header-anchor" href="#路径"><span>路径</span></a></h1><h2 id="相对路径和绝对路径" tabindex="-1"><a class="header-anchor" href="#相对路径和绝对路径"><span>相对路径和绝对路径</span></a></h2><ul><li>绝对路径：以根目录为起点，路径描述以<code>/</code>开头。</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">[miracles@192 /]$ cd /home/miracles/Desktop</span>
<span class="line">[miracles@192 Desktop]$ pwd</span>
<span class="line">/home/miracles/Desktop</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>相对路径：以当前目录为起点，路径描述无需以<code>/</code>开头。</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">[miracles@192 ~]$ ls</span>
<span class="line">Desktop    Downloads  Pictures  Templates</span>
<span class="line">Documents  Music      Public    Videos</span>
<span class="line">[miracles@192 ~]$ cd Desktop</span>
<span class="line">[miracles@192 Desktop]$ pwd</span>
<span class="line">/home/miracles/Desktop</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="特殊路径符" tabindex="-1"><a class="header-anchor" href="#特殊路径符"><span>特殊路径符</span></a></h2><ul><li><code>.</code>：表示当前目录。如<code>cd ./Desktop</code>表示切换到当前目录下的Desktop目录内，和<code>cd Desktop</code>效果一致。</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">[miracles@192 ~]$ cd ./Desktop</span>
<span class="line">[miracles@192 Desktop]$ pwd</span>
<span class="line">/home/miracles/Desktop</span>
<span class="line">[miracles@192 Desktop]$ cd</span>
<span class="line">[miracles@192 ~]$ cd Desktop</span>
<span class="line">[miracles@192 Desktop]$ pwd</span>
<span class="line">/home/miracles/Desktop</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>..</code>：表示上一级目录。如<code>cd ..</code>即可切换到上一级目录，<code>cd ../..</code>切换到上二级目录。</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">[miracles@192 Desktop]$ cd ..</span>
<span class="line">[miracles@192 ~]$ pwd</span>
<span class="line">/home/miracles</span>
<span class="line">[miracles@192 ~]$ cd Desktop</span>
<span class="line">[miracles@192 Desktop]$ cd ../..</span>
<span class="line">[miracles@192 home]$ pwd</span>
<span class="line">/home</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>~</code>：表示HOME目录。比如<code>cd ~</code>即可切换到HOME目录，<code>cd ~/Desktop</code>则是切换到HOME内的Desktop目录。</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">[miracles@192 ~]$ cd ~/Desktop</span>
<span class="line">[miracles@192 Desktop]$ pwd</span>
<span class="line">/home/miracles/Desktop</span>
<span class="line">[miracles@192 Desktop]$ cd ~</span>
<span class="line">[miracles@192 ~]$ pwd</span>
<span class="line">/home/miracles</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14)]))}const r=s(l,[["render",c],["__file","path.html.vue"]]),p=JSON.parse('{"path":"/Sundry/FirstMeetLinux/path.html","title":"路径","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"相对路径和绝对路径","slug":"相对路径和绝对路径","link":"#相对路径和绝对路径","children":[]},{"level":2,"title":"特殊路径符","slug":"特殊路径符","link":"#特殊路径符","children":[]}],"git":{"updatedTime":1745815790000,"contributors":[{"name":"Miracles-miracles","username":"Miracles-miracles","email":"2663284851@qq.com","commits":5,"url":"https://github.com/Miracles-miracles"}]},"filePathRelative":"Sundry/FirstMeetLinux/path.md"}');export{r as comp,p as data};
