const Deque =  class Deque {
    constructor(){
        this.count = 0
        this.topCount = 0
        this.items = {}
    }
    //双端队列前端添加元素
    // addFront(item){
    //     if(this.isEmpty()){
    //         this.addBack(item)
    //     }
    //     if(this.topCount > 0){
    //         this.topCount--
    //         this.items[this.topCount] = item
    //     }else{
    //         for (let i = this.count; i > 0; i--){
    //             this.items[i] = this.items[i - 1]
    //         }
    //         this.count++
    //         this.items[0] = item
    //         this.topCount = 0
    //     }
    // }
    addFront(item){
        if (this.isEmpty()){
            this.addBack(item)
        }
        this.topCount --
        this.items[this.topCount] = item
    }
    //双端队列末尾添加元素
    addBack(item){
        this.items[this.count] = item
        this.count++
    }
    //移除第一个元素
    removeFront(){
        if (this.isEmpty()){
            return undefined
        }
        const result = this.items[this.topCount]
        delete this.items[this.topCount]
        this.topCount ++
        return result
    }
    //移除最后一个元素
    removeBack(){
        if (this.isEmpty()){
            return undefined
        }
        this.count--
        const result = this.items[this.count]
        delete this.items[this.count]
        return result
    }
    //选取第一个元素
    peekFront(){
        if (this.isEmpty()){
            return undefined
        }
        return this.items[this.topCount]
    }
    //选取最后一个元素
    peekBack(){
        if (this.isEmpty()){
            return undefined
        }
        return this.items[this.count]
    }
    //双端队列是否为空
    isEmpty(){
        return this.count - this.topCount === 0
    }
    //清空双端队列
    clear(){
        this.count = 0
        this.topCount = 0
        this.items = {}
    }
    //双端队列长度
    size(){
        return this.count - this.topCount
    }
    toString(){
        if (this.isEmpty()){
            return ''
        }
        let objString = this.items[this.topCount]
        for (let i = this.topCount + 1; i < this.count; i++ ){
            objString = `${objString},${this.items[i]}`
        }
        return objString
    }
}

module.exports = Deque

// const deque = new Deque()
// console.log(deque.isEmpty())    // true
// deque.addBack(8)    
// deque.addBack(0)    
// console.log(deque.toString())   // 8,0
// deque.addBack(2)
// console.log(deque.toString())   // 8,0,2
// console.log(deque.size())   //3
// console.log(deque.isEmpty())    // false
// console.log(deque.removeFront())    // 8
// console.log(deque)
// console.log(deque.toString())   // 0,2
// console.log(deque.removeBack())    // 2
// console.log(deque.toString())   // 0
// deque.addFront(8)
// console.log(deque)  // 8 0
// console.log(deque.toString())   // 8,0