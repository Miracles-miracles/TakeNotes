<template><div><h1 id="添加并提交文件" tabindex="-1"><a class="header-anchor" href="#添加并提交文件"><span>添加并提交文件</span></a></h1>
<h2 id="git-status-查看仓库状态" tabindex="-1"><a class="header-anchor" href="#git-status-查看仓库状态"><span>git status:查看仓库状态</span></a></h2>
<p>使用<code v-pre>git status</code>可以查看当前仓库的状态，执行后会看到有文件标红，也就是说“未被跟踪”，或者说是还没有添加到暂存区，这时我们就要使用<code v-pre>git add</code>命令了。</p>
<h2 id="git-add-添加到暂存区" tabindex="-1"><a class="header-anchor" href="#git-add-添加到暂存区"><span>git add:添加到暂存区</span></a></h2>
<p>使用命令<code v-pre>git add+文件</code>可以将指定文件添加到暂存区，不过我一般使用<code v-pre>git add .</code>，这表示把当前目录下的所有文件都添加到暂存区。</p>
<p>在这之后再次使用<code v-pre>git status</code>，这时你会发现有些文件被标绿了，也就是说“被跟踪”了，这就表明这些文件已经存在于暂存区了。</p>
<p>接下来我们要做的就是把暂存区的文件提交至仓库中。</p>
<h2 id="git-commit-提交到仓库" tabindex="-1"><a class="header-anchor" href="#git-commit-提交到仓库"><span>git commit:提交到仓库</span></a></h2>
<p>使用命令<code v-pre>git commit -m &quot;提交信息&quot;</code>就能把暂存区的文件提交至仓库，“提交信息”可以算是一种注释。在提交之后或是在任意时间段使用命令<code v-pre>git log</code>就能是谁提交的文件、什么时候提交的、提交时写的什么等信息，而且每一次提交都有一个唯一的提交id。</p>
<p>如果在使用该命令的时候不添加使用<code v-pre>-m</code>参数，那么Git会自动打开vim编辑器，随后将会在vim中编辑提交信息。说白了提交信息还是要写的，不要省比较好。</p>
<h2 id="git-push-关联本地仓库和远程仓库" tabindex="-1"><a class="header-anchor" href="#git-push-关联本地仓库和远程仓库"><span>git push:关联本地仓库和远程仓库</span></a></h2>
<p>这个在网上有很多教程，我一开始看的比较杂而且操作失误，导致最后没能成功关联。不过要是指定某个教程，一步一步来的话指定能成功。</p>
<p>我自己是看了Git命令才成功的，使用<code v-pre>git push  main</code>即可。缺点是每次都需要复制<code v-pre>&lt;your-repo-rel&gt;</code>，和网上的教程相比肯定是比较麻烦的。就我个人而言，由于我提交的并不频繁，所以我无所谓。</p>
<p>大家哪个方便用哪个，喜欢哪个用哪个。</p>
</div></template>


