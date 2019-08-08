import Node from '../util/Node'
import LinkedList from './LinkedList'
import defaultEquals from '../util/defaultEquals'

class DoublyNode extends Node {
    constructor(item,next,prev){
        super(item,next)
        this.prev = prev
    }
}

class DoublyLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals){
        super(equalsFn)
        //双向链表最后一个元素的引用
        this.tail = undefined
    }
    //向链表中任意位置插入元素
    insert(item,index){
        if (index >= 0 && index <= this.count){
            const node = new DoublyNode(item)
            const current = this.head
            if (index == 0){
                if (this.head == null){
                    this.head = node
                    this.tail = node
                }else{
                    node.next = this.head
                    current.prev = node
                    this.head = node
                }
            }else if (index == this.count){
                current = this.tail
                current.next = node
                node.prev = current
                this.tail = node
            }else{
                const previous = this.getItemAt(index - 1)
                current = previous.next
                node.next = current
                previous.next = node
                current.prev = node
                node.prev = previous
            }
            this.count++
            return true
        }
        return false
    }
    //任意位置移除元素
    removeAt(index){
        if (index >= 0 && index <= this.count){
            let current = this.head
            if (index == 0){
                this.head = current.next
                if (this.count === 1){
                    this.tail = undefined
                }else{
                    this.head.prev = undefined
                }
            }else if (index == this.count - 1){
                current = this.tail
                this.tail = current.prev
                this.tail.next = undefined
            }else{
                current = this.getItemAt(index)
                const previous = current.prev
                previous.next = current.next
                current.next.prev = previous
            }
            this.count--
            return current.item
        }
        return undefined
    }
}