const defaultToString = require('../util/defaultToString')
const LinkedList = require('./LinkedList')
const ValuePair = require('../util/ValuePair')
 
const HashTableSeparateChaining = class HashTableSeparateChaining {
    constructor(toStrFn = defaultToString){
        this.toStrFn = toStrFn
        this.table = {}
    }
    //计算hash
    loseloseHashCode(key){
        if (typeof key === 'number'){
            return key
        }
        const tableKey = this.toStrFn(key)
        let hash = 0
        for (let i = 0; i < tableKey.length; i++){
            hash += tableKey.charCodeAt(i)
        }
        return hash % 37
    }
    hashCode(key){
        return this.loseloseHashCode(key)
    }
    //将键和值插入散列表分离连接
    put(key,value){
        if (key != null && value != null){
            const position = this.hashCode(key)
            if (this.table[position] == null){
                this.table[position] = new LinkedList()
            }
            this.table[position].push(new ValuePair(key,value))
            return true
        }
        return false
    }
    get(key){
        const position = this.hashCode(key)
        const linkedList = this.table[position]
        if (linkedList != null && !linkedList.isEmpty()){
            let current = linkedList.getHead()
            while(current != null){
                if (current.item.key === key){
                    return current.item.value
                }
                current = current.next
            }
        }
        return undefined
    }
    remove(key){
        const position = this.hashCode(key)
        const linkedList = this.table[position]
        if (linkedList != null && !linkedList.isEmpty()){
            let current = linkedList.getHead()
            while(current != null){
                if (current.item.key === key){
                    linkedList.remove(current.item)
                    if (linkedList.isEmpty()){
                        delete this.table[position]
                    }
                    return true
                }
                current = current.next
            }
        }
        return false
    }
}

module.exports = HashTableSeparateChaining

const hashTable = new HashTableSeparateChaining()
hashTable.put('Ygritte', 'Ygritte')
hashTable.put('Jonathan', 'Jonathan')
hashTable.put('Jamie', 'Jamie')
hashTable.put('Jack', 'Jack')
hashTable.put('Jasmine', 'Jasmine')
hashTable.put('Jake', 'Jake')
hashTable.put('Nathan', 'Nathan')
hashTable.put('Athelstan', 'Athelstan')
hashTable.put('Sue', 'Sue')
hashTable.put('Aethelwulf', 'Aethelwulf')
hashTable.put('Sargeras', 'Sargeras')
console.log(hashTable)