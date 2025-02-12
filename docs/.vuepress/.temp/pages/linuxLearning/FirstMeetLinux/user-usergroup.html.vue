<template><div><h1 id="用户、用户组管理" tabindex="-1"><a class="header-anchor" href="#用户、用户组管理"><span>用户、用户组管理</span></a></h1>
<h2 id="用户管理" tabindex="-1"><a class="header-anchor" href="#用户管理"><span>用户管理</span></a></h2>
<p><strong>创建、删除、查看组、修改组都需要root</strong></p>
<h3 id="创建用户" tabindex="-1"><a class="header-anchor" href="#创建用户"><span>创建用户</span></a></h3>
<ul>
<li>命令：<code v-pre>useradd [-g -d] 用户名</code>
<ul>
<li><code v-pre>-g</code>：指定用户的组。若不指定<code v-pre>-g</code>，则会创建同名组并自动加入；指定<code v-pre>-g</code>需要组已经存在，如已存在同名组，则必须使用<code v-pre>-g</code>。</li>
<li><code v-pre>-d</code>：指定用户HOME路径。不指定，HOME目录默认在<code v-pre>/home/用户名</code>。</li>
</ul>
</li>
</ul>
<h3 id="删除用户" tabindex="-1"><a class="header-anchor" href="#删除用户"><span>删除用户</span></a></h3>
<ul>
<li>命令：<code v-pre>userdel [-r] 用户名</code>
<ul>
<li><code v-pre>-r</code>：删除用户的HOME目录；不使用则在删除用户时保留HOME目录。</li>
</ul>
</li>
</ul>
<h3 id="查看用户所属组" tabindex="-1"><a class="header-anchor" href="#查看用户所属组"><span>查看用户所属组</span></a></h3>
<ul>
<li>命令：<code v-pre>id [用户名]</code>
<ul>
<li><code v-pre>用户名</code>：被查看的用户，如不提供则查看自身。</li>
</ul>
</li>
</ul>
<h3 id="修改用户所属组" tabindex="-1"><a class="header-anchor" href="#修改用户所属组"><span>修改用户所属组</span></a></h3>
<ul>
<li>命令：<code v-pre>usermod -aG 用户组 用户名</code></li>
</ul>
<p>将指定用户加入指定组。</p>
<h3 id="查看系统所有用户" tabindex="-1"><a class="header-anchor" href="#查看系统所有用户"><span>查看系统所有用户</span></a></h3>
<ul>
<li>命令：<code v-pre>getent passwd</code></li>
</ul>
<p>输入命令后系统会列出当前有哪些用户，其中包含7份信息，分别是：<br>
用户名：密码（x）：用户ID：组ID：描述信息：HOME目录：执行终端（默认bash）</p>
<h2 id="用户组管理" tabindex="-1"><a class="header-anchor" href="#用户组管理"><span>用户组管理</span></a></h2>
<p><strong>创建、删除需要root</strong></p>
<h3 id="创建用户组" tabindex="-1"><a class="header-anchor" href="#创建用户组"><span>创建用户组</span></a></h3>
<ul>
<li>命令：<code v-pre>groupadd 用户组名</code></li>
</ul>
<h3 id="删除用户组" tabindex="-1"><a class="header-anchor" href="#删除用户组"><span>删除用户组</span></a></h3>
<ul>
<li>命令：<code v-pre>groupdel 用户组名</code></li>
</ul>
<h3 id="查看系统所有组" tabindex="-1"><a class="header-anchor" href="#查看系统所有组"><span>查看系统所有组</span></a></h3>
<ul>
<li>命令：<code v-pre>getent group</code></li>
</ul>
<p>输入命令后系统会列出当前有哪些用户组，其中包含3份信息，分别是：<br>
组名称：组认证（显示为x）：组ID</p>
</div></template>


