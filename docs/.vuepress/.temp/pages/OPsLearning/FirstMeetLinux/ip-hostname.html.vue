<template><div><h1 id="ip地址与主机名" tabindex="-1"><a class="header-anchor" href="#ip地址与主机名"><span>ip地址与主机名</span></a></h1>
<h2 id="ip地址" tabindex="-1"><a class="header-anchor" href="#ip地址"><span>ip地址</span></a></h2>
<h3 id="ifconfig-查看本机ip" tabindex="-1"><a class="header-anchor" href="#ifconfig-查看本机ip"><span>ifconfig:查看本机ip</span></a></h3>
<p>使用命令<code v-pre>isconfig</code>可以查看本机的ip地址，如果无法使用则要安装：<code v-pre>yum -y install net-tools</code>。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">[miracles@192 ~]$ ifconfig</span>
<span class="line">ens33: flags=4163&lt;UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500</span>
<span class="line">        inet 192.168.44.131  netmask 255.255.255.0  broadcast 192.168.44.255</span>
<span class="line">        inet6 fe80::d055:ee50:dfce:fe08  prefixlen 64  scopeid 0x20&lt;link></span>
<span class="line">        ether 00:0c:29:5e:67:1e  txqueuelen 1000  (Ethernet)</span>
<span class="line">        RX packets 606594  bytes 898402681 (856.7 MiB)</span>
<span class="line">        RX errors 0  dropped 0  overruns 0  frame 0</span>
<span class="line">        TX packets 61083  bytes 4016433 (3.8 MiB)</span>
<span class="line">        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ens33下的inet后面的就是你的ip地址</p>
<h3 id="特殊ip" tabindex="-1"><a class="header-anchor" href="#特殊ip"><span>特殊ip</span></a></h3>
<ul>
<li><code v-pre>127.0.0.1</code>：指代本机</li>
<li><code v-pre>0.0.0.0</code>：特殊ip地址
<ul>
<li>指代本机</li>
<li>在端口绑定中用来确定绑定关系</li>
<li>表示所有ip，比如放行规则设置为<code v-pre>0.0.0.0</code>表示允许任意ip访问。</li>
</ul>
</li>
</ul>
<h3 id="固定ip" tabindex="-1"><a class="header-anchor" href="#固定ip"><span>固定ip</span></a></h3>
<p>虚拟机的Linux的ip是通过DHCP动态获取的，这对于远程连接来说十分不便，所以我们要把它固定下来。</p>
<ul>
<li>使用<code v-pre>vim</code>编辑<code v-pre>/etc/sysconfig/network-scripts/ifcfg-ens33</code>，将<code v-pre>BOOTPROTO=&quot;dhcp&quot;</code>改为<code v-pre>BOOTPROTO=&quot;static&quot;</code>，随后在文件末尾写入以下内容：</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">IPADDR="192.168.44.131"</span>
<span class="line">NETMASK="255.255.255.0"</span>
<span class="line">GATEWAY="192.168.44.2"</span>
<span class="line">DNS1="192.168.44.2"</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">提示</p>
<ul>
<li>首先进入VMware，单击自己使用的虚拟机，随后单击在上面的选项卡中的“编辑”，选择“虚拟网络编辑器”。</li>
<li>单击“VMnet8”，可以看到自己的子网ip和子网掩码，我这里分别是<code v-pre>192.168.44.0</code>、<code v-pre>255.255.255.0</code>。</li>
<li>单击“NET设置”，可以看到自己的网关ip，我这里是<code v-pre>192.168.44.2</code>。</li>
</ul>
<p>现在明白了为什么上面要写入那些数据了吧</p>
</div>
<ul>
<li>执行<code v-pre>systemctl restart network</code>重启网卡，再次查看ip就可以看到自己的固定ip了。</li>
</ul>
<h2 id="主机名" tabindex="-1"><a class="header-anchor" href="#主机名"><span>主机名</span></a></h2>
<p>每台电脑除了ip之外，还有一个主机名，使用<code v-pre>hostname</code>查看。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">[miracles@192 ~]$ hostname</span>
<span class="line">192.168.44.131</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>哈，我的主机名就是自己的ip。</p>
<h3 id="修改主机名" tabindex="-1"><a class="header-anchor" href="#修改主机名"><span>修改主机名</span></a></h3>
<p>使用<code v-pre>hostnamectl set-hostname 主机名</code>来修改主机名，这个也需要root。</p>
<p><strong>有部分操作都是需要root的。执行命令显示没有权限的话，这时root就能解决啦。</strong></p>
<h3 id="域名解析" tabindex="-1"><a class="header-anchor" href="#域名解析"><span>域名解析</span></a></h3>
<p>ip还是很难记忆的，尤其是数据量增大的时候。其实你已经发现了我们平时上网几乎都是直接使用网址，ip却很少使用，我们使用的网址被称之为域名，把域名转换成ip的过程就是域名解析。</p>
<p>当我们使用浏览器访问一个网址的时候，系统会检查<code v-pre>hosts</code>文件中是否有该网址的ip记录：</p>
<ul>
<li>
<p>如果有，则直接打开网站。</p>
</li>
<li>
<p>如果没用，就会联网访问公开的DNS服务器，看看那里有没有记录对应的ip地址，若还是没有那就说明网址不存在。</p>
</li>
<li>
<p>Windows<code v-pre>hosts</code>路径：<code v-pre>C:\Windows\System32\drivers\etc\hosts</code></p>
</li>
<li>
<p>Linux<code v-pre>hosts</code>路径：<code v-pre>/ec/hosts</code></p>
</li>
</ul>
<p><strong>这个dns解析很有用的，可以通过修改hosts来实现进入某些网站，比如github。</strong></p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>github的服务器毕竟是在国外，修改hosts后感觉连接也不是很稳定，后来我就直接安装Watt Toolkit了，用它来加速感觉还可以。</p>
</div>
</div></template>


