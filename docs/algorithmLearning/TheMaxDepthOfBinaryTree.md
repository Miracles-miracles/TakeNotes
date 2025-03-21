# 二叉树的最大深度
[104. 二叉树的最大深度](https://leetcode.cn/problems/maximum-depth-of-binary-tree/description/)  
给定一个二叉树 root ，返回其最大深度。
二叉树的最大深度是指从根节点到最远叶子节点的最长路径上的节点数。
```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public int maxDepth(TreeNode root) {
        if(root==null){
            return 0;
        }
        int leftLength=maxDepth(root.left);
        int rightLength=maxDepth(root.right);
        return Math.max(leftLength,rightLength)+1;
    }
}

```