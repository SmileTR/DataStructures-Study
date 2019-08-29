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
    //搜索最小值
    min(){
        return this.minNode(this.root)
    }
    minNode(node){
        let current = node
        while (current != null && current.left != null){
            current = current.left
        }
        return current
    }
    //搜索最大值
    max(){
        return this.maxNode(this.root)
    }
    maxNode(node){
        let current = node
        while (current != null && current.right != null){
            current = current.right
        }
        return current
    }
    //搜索指定值
    search(key){
        return this.searchNode(this.root, key)
    }
    searchNode(node,key){
        if (node == null){
            return false
        }
        if (this.compareFn(key,node.key) === Compare.LESS_THAN){
            return this.searchNode(node.left, key)
        }else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN){
            return this.searchNode(nodel.right, key)
        }else{
            return true
        }
    }
    //移除一个节点
    remove(key){
        return this.root = this.removeNode(node, key)
    }
    removeNode(node, key){
        if (node == null){
            return null
        }
        if (this.compareFn(key, node.key) === Compare.LESS_THAN){
            node.left = this.removeNode(node.left, key)
            return node
        }else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN){
            node.right = this,this.removeNode(node.right, key)
            return node
        }else{
            //1
            if (node.left == null && node.right == null){
                node = null
                return node
            }
            //2
            if (node.left == null){
                node = node.right
                return node
            }else if (node.right == null){
                node = node.left
                return node
            }
            //3
            const aux = this.minNode(node.right)
            node.key = aux.key
            node.right = this.removeNode(node.right, aux.key)
            return node
        }
    }
}