<template><div><h1 id="二叉树的最小深度" tabindex="-1"><a class="header-anchor" href="#二叉树的最小深度"><span>二叉树的最小深度</span></a></h1>
<p><a href="https://leetcode.cn/problems/minimum-depth-of-binary-tree/description/" target="_blank" rel="noopener noreferrer">111. 二叉树的最小深度</a><br>
给定一个二叉树，找出其最小深度。
最小深度是从根节点到最近叶子节点的最短路径上的节点数量。</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * Definition for a binary tree node.</span>
<span class="line"> * public class TreeNode <span class="token punctuation">{</span></span>
<span class="line"> *     int val;</span>
<span class="line"> *     TreeNode left;</span>
<span class="line"> *     TreeNode right;</span>
<span class="line"> *     TreeNode() <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"> *     TreeNode(int val) <span class="token punctuation">{</span> this.val = val; <span class="token punctuation">}</span></span>
<span class="line"> *     TreeNode(int val, TreeNode left, TreeNode right) <span class="token punctuation">{</span></span>
<span class="line"> *         this.val = val;</span>
<span class="line"> *         this.left = left;</span>
<span class="line"> *         this.right = right;</span>
<span class="line"> *     <span class="token punctuation">}</span></span>
<span class="line"> * <span class="token punctuation">}</span></span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">minDepth</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span><span class="token punctuation">(</span>root<span class="token operator">==</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token operator">==</span><span class="token keyword">null</span><span class="token operator">&amp;&amp;</span>root<span class="token punctuation">.</span>right<span class="token operator">==</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">int</span> getMinDepth<span class="token operator">=</span><span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token operator">!=</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            getMinDepth<span class="token operator">=</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>getMinDepth<span class="token punctuation">,</span><span class="token function">minDepth</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">if</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token operator">!=</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            getMinDepth<span class="token operator">=</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>getMinDepth<span class="token punctuation">,</span><span class="token function">minDepth</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">return</span> getMinDepth<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


