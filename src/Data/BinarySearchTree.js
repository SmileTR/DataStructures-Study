const { Compare, defaultCompare } = require('../util/compare')
const TreeNode = require('../util/TreeNode')

const BinarySearchTree = class BinarySearchTree {
    constructor(compareFn = defaultCompare){
        this.compareFn = compareFn
        this.root = null
    }
    //向二叉搜索树插入一个键，每次插入从根节点判断
    insert(key){
        if (this.root = null){
            this.root = new TreeNode(key)
        }else{
            this.insertNode(this.root, key)
        }
    }
    insertNode(node, key){
        if (this.compareFn(key, node.key) === Compare.LESS_THAN){
            if (node.left == null){
                node.left = new TreeNode(key)
            }else{
                this.insertNode(node.left, key)
            }
        }else{
            if (node.right == null){
                node.right = new TreeNode(key)
            }else{
                this.insertNode(node.right, key)
            }
        }
    }
    //中序遍历
    inOrderTraverse(callback){
        this.inOrderTraverseNode(this.root, callback)
    }
    inOrderTraverseNode(node, callback){
        if (node != null){
            this.inOrderTraverseNode(node.left, callback)
            callback(node.key)
            this.inOrderTraverseNode(node.right, callback)
        }
    }
    //先序遍历
    preOrderTraverse(callback){
        this.preOrderTraverseNode(node, callback)
    }
    preOrderTraverseNode(node, callback){
        if (node != null){
            callback(node.key)
            this.preOrderTraverseNode(node.left, callback)
            this.preOrderTraverseNode(node.right, callback)
        }
    }
    //后序遍历
    postOrderTraverse(callback){
        this.postOrderTraverseNode(node, callback)
    }
    postOrderTraverseNode(node, callback){
        if (node != null){
            this.postOrderTraverseNode(node.left, callback)
            this.postOrderTraverseNode(node.right, callback)
            callback(node.key)
        }
    }
}