<template><div><h1 id="shell变量" tabindex="-1"><a class="header-anchor" href="#shell变量"><span>Shell变量</span></a></h1>
<h2 id="定义shell变量" tabindex="-1"><a class="header-anchor" href="#定义shell变量"><span>定义shell变量</span></a></h2>
<div class="hint-container warning">
<p class="hint-container-title">Warning</p>
<p>注意，变量名和等号之间不能有空格！因为空格通常用于分隔变量和参数。</p>
</div>
<h2 id="使用shell变量" tabindex="-1"><a class="header-anchor" href="#使用shell变量"><span>使用shell变量</span></a></h2>
<p>要使用一个定义过的变量，只需要在变量名前面加一个美元符号，即<code v-pre>$</code>。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">#!/bin/bash</span>
<span class="line">name="Miracles"</span>
<span class="line">echo $name</span>
<span class="line"></span>
<span class="line">[root@localhost code]# ./test.sh</span>
<span class="line">Miracles</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为帮助解释器识别变量边界，还可以为变量添加一个花括号，如<code v-pre>${name}</code>。</p>
<p>一个已经被定义的变量还可以被重新定义：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">#!/bin/bash</span>
<span class="line">name="Miracles"</span>
<span class="line">name="Tom"</span>
<span class="line">echo $name</span>
<span class="line"></span>
<span class="line">[root@localhost code]# ./test.sh</span>
<span class="line">Tom</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="只读变量" tabindex="-1"><a class="header-anchor" href="#只读变量"><span>只读变量</span></a></h2>
<p>使用 readonly 命令可以将变量定义为只读变量，只读变量的值不能被改变。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">#!/bin/bash</span>
<span class="line">name="Miracles"</span>
<span class="line">readonly name</span>
<span class="line">name="Tom"</span>
<span class="line">echo $name</span>
<span class="line"></span>
<span class="line">[root@localhost code]# ./test.sh</span>
<span class="line">./test.sh: line 4: name: readonly variable</span>
<span class="line">Miracles</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="删除变量" tabindex="-1"><a class="header-anchor" href="#删除变量"><span>删除变量</span></a></h2>
<p>要想删除一个变量，需要使用<code v-pre>unset</code>命令。变量被删除后不能再次使用，而且只读变量不能被删除。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">#!/bin/bash</span>
<span class="line">address="WHPU"</span>
<span class="line">name="Miracles"</span>
<span class="line">readonly name</span>
<span class="line">unset address</span>
<span class="line">unset name</span>
<span class="line">echo $name</span>
<span class="line">echo $address</span>
<span class="line"></span>
<span class="line">[root@localhost code]# ./test.sh</span>
<span class="line">./test.sh: line 6: unset: name: cannot unset: readonly variable</span>
<span class="line">Miracles</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="变量类型" tabindex="-1"><a class="header-anchor" href="#变量类型"><span>变量类型</span></a></h2>
<ul>
<li>字符串变量：在Shell中，变量通常被视为字符串。可以使用单引号 ' 或双引号 &quot; 来定义字符串。</li>
<li>整数变量：使用<code v-pre>declare</code>或<code v-pre>typeset</code>命令来声明整数变量，这样的变量只包含整数值。</li>
</ul>
<div class="hint-container info">
<p class="hint-container-title">Info</p>
<p><code v-pre>declare</code> [选项] [变量名=值]</p>
<ul>
<li><code v-pre>-r</code>：将变量设置为只读，不可修改。</li>
<li><code v-pre>-i</code>：将变量设置为整数类型。</li>
<li><code v-pre>-a</code>：将变量设置为数组类型。</li>
<li><code v-pre>-f</code>：将变量设置为函数类型。</li>
<li><code v-pre>-x</code>：将变量设置为环境变量。</li>
</ul>
</div>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">#!/bin/bash</span>
<span class="line">declare -i num=1.2</span>
<span class="line">echo $num</span>
<span class="line"></span>
<span class="line">[root@localhost code]# ./test.sh</span>
<span class="line">./test.sh: line 2: declare: 1.2: syntax error: invalid arithmetic operator (error token is ".2")</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">!/bin/bash</span>
<span class="line">declare -i num=1</span>
<span class="line">echo $num</span>
<span class="line"></span>
<span class="line">[root@localhost code]# ./test.sh</span>
<span class="line">1</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>数组变量：允许在变量中存储多个值。</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">!/bin/bash</span>
<span class="line">declare -a array1=(1 2 3 4 5)</span>
<span class="line">array2=(6 7 8 9 10)</span>
<span class="line">echo $array1</span>
<span class="line">echo $array2</span>
<span class="line"></span>
<span class="line">[root@localhost code]# ./test.sh</span>
<span class="line">1</span>
<span class="line">6</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container note">
<p class="hint-container-title">Note</p>
<p>和C语言有点像，只不过C语言直接打印数组名会打印出首元素的地址，而shell则直接打印出了第一个元素。</p>
</div>
<ul>
<li>环境变量：这些是由操作系统或用户设置的特殊变量，用于配置Shell的行为和影响其执行环境。</li>
<li>特殊变量：有一些特殊变量在 Shell 中具有特殊含义，例如<code v-pre>$0</code>表示脚本的名称，<code v-pre>$1</code>，<code v-pre>$2</code>等表示脚本的参数。<code v-pre>$#</code>表示传递给脚本的参数数量，<code v-pre>$?</code>表示上一个命令的退出状态等。</li>
</ul>
<h2 id="shell字符串" tabindex="-1"><a class="header-anchor" href="#shell字符串"><span>shell字符串</span></a></h2>
<p>对于shell的字符串，可以用单引号，也可以用双引号。不过还是用双引号多一点，因为单引号有一些限制，而双引号不仅能包含变量，还可以出现转义字符。</p>
<h3 id="拼接字符串" tabindex="-1"><a class="header-anchor" href="#拼接字符串"><span>拼接字符串</span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">#!/bin/bash</span>
<span class="line">str1="Hello"</span>
<span class="line">str2="Shell"</span>
<span class="line">str3="Script"</span>
<span class="line">echo $str1 $str2 $str3</span>
<span class="line"></span>
<span class="line">[root@localhost code]# ./test.sh</span>
<span class="line">Hello Shell Script</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取字符串长度" tabindex="-1"><a class="header-anchor" href="#获取字符串长度"><span>获取字符串长度</span></a></h3>
<p>使用字符符串变量名并在里面加<code v-pre>#</code>就可以了。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">#!/bin/bash</span>
<span class="line">string="abcd"</span>
<span class="line">echo ${#string}</span>
<span class="line">echo ${#string[0]}</span>
<span class="line"></span>
<span class="line">[root@localhost code]# ./test.sh</span>
<span class="line">4</span>
<span class="line">4</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="提取子字符串" tabindex="-1"><a class="header-anchor" href="#提取子字符串"><span>提取子字符串</span></a></h3>
</div></template>


