const defaultToString = require('../util/defaultToString')
const ValuePair = require('../util/ValuePair')

const Dictionary = class Dictionary {
    constructor(toStrFn = defaultToString){
        this.toStrFn = toStrFn
        this.table = {}
    }
    //检测键是否存在于字典中
    hasKey(key){
        return this.table[this.toStrFn(key)] != null
    }
    //向字典添加
    set(key,value){
        if (key != null && value != null){
            const tableKey = this.toStrFn(key)
            this.table[tableKey] = new ValuePair(key,value)
            return true
        }
        return false
    }
    //从字典中移除一个值
    remove(key){
        if (this.hasKey(key)){
            delete this.table[this.toStrFn(key)]
            return true
        }
        return false
    }
    //从字典中检索一个值
    get(key){
        const valuePair = this.table[this.toStrFn(key)]
        return valuePair == null ? undefined : valuePair.value
    }
    keyValues(){
        return Object.values(this.table)
    }
    keys(){
        return this.keyValues.map(item => item.key)
    }
    values(){
        return this.keyValues.map(item => item.value)
    }
    //迭代字典中每个键值对
    forEach(callback){
        const valuePairs = this.keyValues()
        for (let i = 0; i < valuePairs.length; i++){
            const result = callback(valuePairs[i].key,valuePairs[i].value)
            if (result === false){
                break
            }
        }
    }
    //
    size(){
        return Object.keys(this.table).length
    }
    isEmpty(){
        return this.size() === 0
    }
    clear(){
        this.table = {}
    }
    toString(){
        if (this.isEmpty()){
            return ''
        }
        const valuePairs = this.keyValues()
        let objString = `${valuePairs[0].toString()}`
        for (let i = 1; i < valuePairs.length; i++){
            objString = `${objString},${valuePairs[i].toString()}`
        }
        return objString
    }
}

module.exports = Dictionary

const dictionary = new Dictionary()
dictionary.set('name','tr')
console.log(dictionary)