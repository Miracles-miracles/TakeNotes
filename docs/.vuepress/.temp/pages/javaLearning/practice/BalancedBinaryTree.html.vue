<template><div><h1 id="平衡二叉树" tabindex="-1"><a class="header-anchor" href="#平衡二叉树"><span>平衡二叉树</span></a></h1>
<p>每个节点的左右子树高度差不超过 1。这种结构可以是二叉搜索树，也可以是其他类型的二叉树。</p>
<p><a href="https://leetcode.cn/problems/balanced-binary-tree/description/" target="_blank" rel="noopener noreferrer">110. 平衡二叉树</a><br>
给定一个二叉树，判断它是否是平衡二叉树</p>
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
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isBalanced</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span><span class="token punctuation">(</span>root<span class="token operator">==</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span><span class="token function">getHeight</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token operator">-</span><span class="token function">getHeight</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">&lt;=</span><span class="token number">1</span><span class="token operator">&amp;&amp;</span><span class="token function">isBalanced</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token operator">&amp;&amp;</span><span class="token function">isBalanced</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getHeight</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span><span class="token punctuation">(</span>root<span class="token operator">==</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">int</span> leftHeight<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">int</span> rightHeight<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">        leftHeight<span class="token operator">=</span><span class="token function">getHeight</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        rightHeight<span class="token operator">=</span><span class="token function">getHeight</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">int</span> res<span class="token operator">=</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>leftHeight<span class="token punctuation">,</span>rightHeight<span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> res<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


