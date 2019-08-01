import { defaultEquals } from '../util/defaultEquals'
import Node from '../util/Node'

export default class LinkedList {
    constructor(equalsFn = defaultEquals){
        this.count = 0
        this.head = undefined
        this.equalsFn = equalsFn
    }
    //向链表尾部添加元素
    push(item){
        let current
        const node = new Node(item)
        if (this.head == null){
            this.head = node
        }else{
            current = this.head
            while (current.next != null){
                current = current.next
            }
            current.next = node
        }
        this.count++
    }
    //从链表中移除元素
    removeAt(index){
        if (index >= 0 && index < this.count){
            let current = this.head
            //移除第一个元素，将链表head指向
            if (index === 0){
                this.head = current.next
            }else{
                // let previous 
                // for (i = 0; i < index; i++){
                //     previous = current
                //     current = current.next
                // }
                // previous.next = current.next
                const previous = this.getItemAt(index - 1)
                current = previous.next
                previous.next = current.next
            }
            this.count--
            return current.item
        }
        return undefined
    }
    //获取目标位置元素
    getItemAt(index){
        if (index >= 0 && index < this.count){
            let node = this.head
            for (i = 0; i < index; i++){
                node = node.next
            }
            return node
        }
        return undefined
    }
    //在任意位置插入元素
    insert(item,index){
        if (index >= 0 && index <= this.count){
            const node = new Node(item)
            if (index === 0){
                const current = this.head
                node.next = current
                this.head = node
            }else{
                const previous = this.getItemAt(index - 1)
                const current = previous.next
                node.next = current
                previous.next = node
            }
            this.count++
            return true
        }
        return false
    }
    //返回链表中一个元素的位置
    indexOf(item){
        let current = this.head
        for (let i = 0; i < this.count && current != null; i++){
            if(this.equalsFn(item,current.item)){
                return i 
            }
            current = current.next
        }
        return -1
    }
    //链表长度
    size(){
        return this.count
    }
    //链表是否为空
    isEmpty(){
        return this.size() === 0
    }
    //获取链表头部
    getHead(){
        return this.head
    }
    toString(){
        if (this.head == null){
            return ''
        }
        let objString = `${this.head.item}`
        let current = this.head.next
        for (i = 1; i < this.count; i++){
            objString = `${objString},${current.item}`
            current = current.next
        }
        return objString
    }

}