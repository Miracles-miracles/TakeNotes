# 二叉树的最小深度
[111. 二叉树的最小深度](https://leetcode.cn/problems/minimum-depth-of-binary-tree/description/)  
给定一个二叉树，找出其最小深度。
最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
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
    public int minDepth(TreeNode root) {
        if(root==null){
            return 0;
        }else if(root.left==null&&root.right==null){
            return 1;
        }
        int getMinDepth=Integer.MAX_VALUE;
        if(root.left!=null){
            getMinDepth=Math.min(getMinDepth,minDepth(root.left));
        }
        if(root.right!=null){
            getMinDepth=Math.min(getMinDepth,minDepth(root.right));
        }
        return getMinDepth+1;
    }
}
```