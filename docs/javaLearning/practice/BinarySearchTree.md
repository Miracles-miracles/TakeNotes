# 二叉搜索树
对于每一个节点，左子树中所有节点的值都小于该节点的值，而右子树中所有节点的值都大于该节点的值。这为快速查找、插入和删除操作提供了便利。

[108.将有序数组转化为二叉搜索树](https://leetcode.cn/problems/convert-sorted-array-to-binary-search-tree/description/)  
给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵平衡二叉搜索树。
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
    public TreeNode sortedArrayToBST(int[] nums) {
        return Work(nums, 0, nums.length-1);
    }
    public TreeNode Work(int[] nums, int left, int right){
        TreeNode root=new TreeNode();
        if(left>right){
            return null;
        }
        int mid=(left+right)/2;
        root.val=nums[mid];
        root.left=Work(nums, left, mid-1);
        root.right=Work(nums, mid+1, right);
        return root;
    }
}
```