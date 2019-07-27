const Queue = require('../Data/Queue')

//击鼓传花算法
function hotPotato(list,num){
    const queue = new Queue()
    const loser = []
    for (let i = 0; i < list.length; i++){
        queue.enqueue(list[i])
    }
    while (queue.size() > 1){
        for (i = 0; i < num; i++){
            queue.enqueue(queue.dequeue())
        }
        loser.push(queue.dequeue())
    }
    return {
        loser,
        winner: queue.dequeue()
    }
}

//example:
const list = [1,2,3,4,5]
const result = hotPotato(list,7)
console.log(result.loser)   // [2,3,4,5]
console.log(result.winner)  // 1
