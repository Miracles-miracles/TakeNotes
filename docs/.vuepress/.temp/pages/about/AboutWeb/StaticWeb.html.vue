<template><div><h1 id="生成静态网站" tabindex="-1"><a class="header-anchor" href="#生成静态网站"><span>生成静态网站</span></a></h1>
<p>建立静态网站的初衷就是为了获得一个跨端的、免费的、可搜索的“笔记本”而已，并且仅此而已。对于我来说，这就是它的用途。</p>
<h2 id="vuepress-vue-驱动的静态网站生成器" tabindex="-1"><a class="header-anchor" href="#vuepress-vue-驱动的静态网站生成器"><span>VuePress:Vue 驱动的静态网站生成器</span></a></h2>
<p>使用VuePress生成静态网站是一个方便的选择，这样生成的网站给我的感觉就像领包入住的简装房：想折腾的可以精装修，懒一点的也不影响入住体验。而且网站的内容都由MarkDown书写，以文字和图片为主，很适合做文字笔记。</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>在使用VuePress之前要先安装Node.js。Node.js自带包管理器nmp，我看的教程上推荐使用yarn，这样的话也要先安装yarn。可以通过安装包安装，也可以通过命令行安装。安装后执行<code v-pre>yarn -v</code>查看版本信息，能看到就说明安装成功了。</p>
<p>VuePress提供了丰富的主题，喜欢探索的可以多试试。这里我使用的是默认主题，有一种感觉，“还得是默认”。</p>
</div>
<h2 id="基本流程" tabindex="-1"><a class="header-anchor" href="#基本流程"><span>基本流程</span></a></h2>
<p><a href="https://vuepress.vuejs.org/zh/" target="_blank" rel="noopener noreferrer">登录VuePress官网</a>，在导航栏“指南”中选择“快速上手”，然后你就会看到一个建立静态网站的基本流程。这里我就对一些不一样的地方做些说明。</p>
<h3 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目"><span>创建项目</span></a></h3>
<p>在这一板块中，我没有使用模板，后面我用的也仅仅是默认主题，但这就够了。除了手动创建新目录之外，还可以在GitHub上创建一个仓库，然后克隆至本地，在这期间还需要配置ssh公钥。详情可以在站内搜索关键词“ssh公钥”和“克隆现有仓库”。</p>
<h3 id="接下来跟着官网做" tabindex="-1"><a class="header-anchor" href="#接下来跟着官网做"><span>接下来跟着官网做</span></a></h3>
<ul>
<li>初始化项目</li>
<li>安装VuePress</li>
<li>创建docs目录和docs/.vuepress目录</li>
<li>创建 VuePress 配置文件 docs/.vuepress/config.js</li>
<li>创建你的第一篇文档</li>
<li>启动开发服务器</li>
<li>构建你的网站</li>
</ul>
<p>至此，你的网站雏形就已经初步显现了，你所写的MarkDown文档已经可以展现在网站中了。接下来要做的就是一些基本配置，在我看来，弄好首页、导航栏和侧边栏并且部署后就可以投入使用了。</p>
<h3 id="配置首页" tabindex="-1"><a class="header-anchor" href="#配置首页"><span>配置首页</span></a></h3>
<h3 id="配置导航栏" tabindex="-1"><a class="header-anchor" href="#配置导航栏"><span>配置导航栏</span></a></h3>
<h3 id="配置侧边栏" tabindex="-1"><a class="header-anchor" href="#配置侧边栏"><span>配置侧边栏</span></a></h3>
<h3 id="部署到github-pages" tabindex="-1"><a class="header-anchor" href="#部署到github-pages"><span>部署到GitHub Pages</span></a></h3>
<h3 id="本地代码上传至github" tabindex="-1"><a class="header-anchor" href="#本地代码上传至github"><span>本地代码上传至GitHub</span></a></h3>
</div></template>


