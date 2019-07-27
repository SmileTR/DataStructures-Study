const Stack = class Stack {
    constructor(){
        this.count = 0
        this.items = {}
    }
    //向栈中插入元素
    push(item){
        this.items[this.count] = item
        this.count++
    }
    //移出栈顶元素
    pop(){
        if (this.isEmpty()) {
            return undefined
        }  
        this.count--
        const result = this.items[this.count]
        delete this.items[this.count]
        return result
    }
    //返回栈顶元素
    peek(){
        if (this.isEmpty()) {
            return undefined
        }
        return this.items[this.count - 1]
    }
    //栈是否为空
    isEmpty(){
        return this.count === 0
    }
    //清空栈
    clear(){
        this.count = 0
        this.items = {}
    }
    //栈元素个数
    size(){
        return this.count
    }
    toString(){
        if (this.isEmpty()){
            return ''
        }
        let objString = `${this.items[0]}`
       for (let i = 1; i < this.count; i++){
           objString = `${objString},${this.items[i]}`
       }
        return objString
    }
}

module.exports = Stack

// const stack = new Stack()
// stack.push(8)
// stack.push(0)
// console.log(stack)  //8 0
// stack.push(2)
// console.log(stack.pop())    //2
// console.log(stack)          //8 0
// console.log(stack.peek())   // 0
// console.log(stack.isEmpty())    // fasle
// console.log(stack.size())   //2
// console.log(stack.toString() + '------------->' + typeof stack.toString())  //8,0
// stack.clear()
// console.log(stack)
