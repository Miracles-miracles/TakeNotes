<template><div><h1 id="二叉搜索树" tabindex="-1"><a class="header-anchor" href="#二叉搜索树"><span>二叉搜索树</span></a></h1>
<p>对于每一个节点，左子树中所有节点的值都小于该节点的值，而右子树中所有节点的值都大于该节点的值。这为快速查找、插入和删除操作提供了便利。</p>
<p><a href="https://leetcode.cn/problems/convert-sorted-array-to-binary-search-tree/description/" target="_blank" rel="noopener noreferrer">108.将有序数组转化为二叉搜索树</a><br>
给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵平衡二叉搜索树。</p>
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
<span class="line">    <span class="token keyword">public</span> <span class="token class-name">TreeNode</span> <span class="token function">sortedArrayToBST</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token class-name">Work</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> nums<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token class-name">TreeNode</span> <span class="token class-name">Work</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span> <span class="token keyword">int</span> left<span class="token punctuation">,</span> <span class="token keyword">int</span> right<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">TreeNode</span> root<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span><span class="token punctuation">(</span>left<span class="token operator">></span>right<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">int</span> mid<span class="token operator">=</span><span class="token punctuation">(</span>left<span class="token operator">+</span>right<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line">        root<span class="token punctuation">.</span>val<span class="token operator">=</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">        root<span class="token punctuation">.</span>left<span class="token operator">=</span><span class="token class-name">Work</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> left<span class="token punctuation">,</span> mid<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        root<span class="token punctuation">.</span>right<span class="token operator">=</span><span class="token class-name">Work</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> mid<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> right<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> root<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


