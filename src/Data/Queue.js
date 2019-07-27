const Queue = class Queue {
    constructor(){
        this.count = 0
        this.topCount = 0
        this.items = {}
    }
    //向队伍尾添加元素
    enqueue(item){
        this.items[this.count] = item
        this.count++
    }
    //移除队列第一项
    dequeue(){
        if (this.isEmpty()){
            return undefined
        }
        const result = this.items[this.topCount]
        delete this.items[this.topCount]
        this.topCount++
        return result
    }
    //选取队列第一个元素
    peek(){
        if (this.isEmpty()){
            return undefined
        }
        return this.items[this.topCount]
    }
    //队列是否为空
    isEmpty(){
        return this.count - this.topCount === 0
    }
    //队列长度
    size(){
        return this.count - this.topCount
    }
    //清空队列
    clear(){
        this.count = 0
        this.topCount = 0
        this.items = {}
    }
    toString(){
        if (this.isEmpty()) {
            return ''
        }
        let objString = this.items[this.topCount]
        for (let i = this.topCount + 1; i < this.count; i++ ){
            objString = `${objString},${this.items[i]}`
        }
        return objString
    }
}

module.exports = Queue

// const queue = new Queue()
// queue.enqueue(1)
// queue.enqueue(8)
// queue.enqueue(0)
// queue.enqueue(2)
// queue.enqueue(3)
// console.log(queue)     // 1 8 0 2 3
// console.log(queue.dequeue())    // 1
// console.log(queue)      // 8 0 2 3
// console.log(queue.peek())   // 8
// console.log(queue.isEmpty())    // false
// console.log(queue.size())   //  4
// console.log(queue.toString())   // 8,0,2,3
// queue.clear()
// console.log(queue)
// console.log(queue.isEmpty())    //true
