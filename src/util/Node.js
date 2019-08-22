/**
 * @param item 插入链表中的项
 * @param next 链表中下一个元素的指针
 */
module.exports = class Node{
    constructor(item){
        this.item = item
        this.next = undefined
    }
}