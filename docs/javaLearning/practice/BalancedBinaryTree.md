# 平衡二叉树
每个节点的左右子树高度差不超过 1。这种结构可以是二叉搜索树，也可以是其他类型的二叉树。

[110. 平衡二叉树](https://leetcode.cn/problems/balanced-binary-tree/description/)  
给定一个二叉树，判断它是否是平衡二叉树
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
    public boolean isBalanced(TreeNode root) {
        if(root==null){
            return true;
        }
        return Math.abs(getHeight(root.left)-getHeight(root.right))<=1&&isBalanced(root.left)&&isBalanced(root.right);
    }
    
    public int getHeight(TreeNode root){
        if(root==null){
            return 0;
        }
        int leftHeight=0;
        int rightHeight=0;
        leftHeight=getHeight(root.left);
        rightHeight=getHeight(root.right);
        int res=Math.max(leftHeight,rightHeight)+1;
        return res;
    }
}
```