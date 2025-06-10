import{_ as s,c as a,a as e,o as t}from"./app-DFizdBth.js";const p={};function l(i,n){return t(),a("div",null,n[0]||(n[0]=[e(`<h1 id="二叉树的最大深度" tabindex="-1"><a class="header-anchor" href="#二叉树的最大深度"><span>二叉树的最大深度</span></a></h1><p><a href="https://leetcode.cn/problems/maximum-depth-of-binary-tree/description/" target="_blank" rel="noopener noreferrer">104. 二叉树的最大深度</a><br> 给定一个二叉树 root ，返回其最大深度。 二叉树的最大深度是指从根节点到最远叶子节点的最长路径上的节点数。</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token doc-comment comment">/**</span>
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
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">maxDepth</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span><span class="token punctuation">(</span>root<span class="token operator">==</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">int</span> leftLength<span class="token operator">=</span><span class="token function">maxDepth</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">int</span> rightLength<span class="token operator">=</span><span class="token function">maxDepth</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>leftLength<span class="token punctuation">,</span>rightLength<span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)]))}const o=s(p,[["render",l],["__file","TheMaxDepthOfBinaryTree.html.vue"]]),r=JSON.parse('{"path":"/algorithmLearning/TheMaxDepthOfBinaryTree.html","title":"二叉树的最大深度","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1742566831000,"contributors":[{"name":"Miracles-miracles","username":"Miracles-miracles","email":"2663284851@qq.com","commits":2,"url":"https://github.com/Miracles-miracles"}]},"filePathRelative":"algorithmLearning/TheMaxDepthOfBinaryTree.md"}');export{o as comp,r as data};
