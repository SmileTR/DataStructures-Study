const defaultToString = require('../util/defaultToString')
const ValuePair = require('../util/ValuePair')

const HashTable = class HashTable{
    constructor(toStrFn = defaultToString){
        this.toStrFn = toStrFn
        this.table = {}
    }
    //计算hash
    loseloseHashCode(key) {
        if (typeof key === 'number') {
            return key
        }
        const tableKey = this.toStrFn(key)
        let hash = 0;
        for (let i = 0; i < tableKey.length; i++){
            hash += tableKey.charCodeAt(i)
        }
        return hash % 37
    }
    hashCode(key){
        return this.loseloseHashCode(key)
    }
    //将键和值加入散列表
    put(key,value){
        if (key != null && value != null){
            const position = this.hashCode(key)
            this.table[position] = new ValuePair(key,value)
            return true
        }
        return false
    }
    //从散列表中获取一个值
    get(key){
        const valuePair = this.table[this.hashCode(key)]
        return valuePair == null ? undefined : valuePair.value
    }
    //从散列表中移除一个值
    remove(key){
        const hash = this.hashCode(key)
        if (this.table[hash] != null){
            delete this.table[hash]
            return true
        }
        return false
    }
    size(){
        return Object.keys(this.table).length
    }
    isEmpty(){
        return this.size() === 0
    }
    toString(){
        if (this.isEmpty()){
            return ''
        }
        const keys = Object.keys(this.table)
        let objString = `{ ${keys[0]} => ${this.table[keys[0]].toString()} }`
        for (let i = 1; i < keys.length; i++){
            objString = `${objString}, { ${keys[i]} => ${this.table[keys[i]].toString()} }`
        }
        return objString
    }
}

module.exports = HashTable

// const hashTable = new HashTable()
// hashTable.put('name','tr')
// hashTable.put('sex',"男")
// hashTable.put('age',24)
// console.log(hashTable.hashCode('name') + '- name')
// console.log(hashTable.hashCode('sex') + '- sex')
// console.log(hashTable.hashCode('age') + '- age')

// console.log(hashTable.get('name'))
// console.log(hashTable.get('xx'))

// hashTable.remove('age')
// console.log(hashTable.get('age'))

const hashTable = new HashTable()
hashTable.put('Ygritte','Ygritte')
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
console.log(hashTable.toString())