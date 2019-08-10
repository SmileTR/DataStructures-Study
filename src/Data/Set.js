class Set {
    constructor(){
        this.items = {}
    }
    //元素是否存在于集合中
    has(item){
        // return item in items
        return Object.prototype.hasOwnProperty.call(htis.items, item)
    }
    //向集合添加元素
    add(item){
        if (!this.has(item)){
            this.items[item] = item
            return true
        }
        return false
    }
    //删除集合中的元素
    delete(item){
        if (this.has(item)){
            delete this.items[item]
            return true
        }
        return false
    }
    //清空集合
    clear(){
        this.items = {}
    }
    size(){
        return Object.keys(this.items).length
    }
    values(){
        return Object.values(this.items)
    }
    //并集
    union(otherSet){
        const unionSet = new Set()
        this.values().forEach(item => unionSet.add(item))
        otherSet.values().forEach(item => unionSet.add(item))
        return unionSet
    }
    //交集
    intersection(otherSet){
        const intersectionSet = new Set()
        const values = this.values
        const otherValues = otherSet.values
        let biggerSet = values
        let smallerSet = otherValues
        if (otherValues.length - values.length > 0){
            biggerSet = otherValues
            smallerSet = values
        }
        smallerSet.forEach(item => {
            if (biggerSet.includes(item)){
                intersectionSet.add(item)
            }
        })
        return intersectionSet
    }
    //差集
    difference(otherSet){
        const differenceSet = new Set()
        this.values.forEach(item => {
            if (!otherSet.has(item)){
                differenceSet.add(item)
            }
        })
        return differenceSet
    }
    //子集
    isSubsetOf(otherSet){
        if (this.size() > otherSet.size()){
            return false
        }
        let isSubset = true
        this.values().every(item => {
            if (!otherSet.has(item)){
                isSubset = false
                return false
            }
            return true
        })
        return isSubset
    }
}