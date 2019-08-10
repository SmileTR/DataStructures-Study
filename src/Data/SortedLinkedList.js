import LinkedList from './LinkedList'
import { defaultEquals } from '../util/defaultEquals';

const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1
}

function defaultCompare (a,b){
    if (a === b){
        return 0
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN
}

class SortedLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals, compareFn = defaultCompare){
        super(equalsFn)
        this.compareFn = compareFn
    }
    insert(item,index = 0){
        if (this.isEmpty()){
            return super.insert(item, 0)
        }
        const pos = this.getIndexNextSortedItem(item)
        return super.insert(item, pos)
        
    }
    //根据插入元素获取插入位置
    getIndexNextSortedItem(item){
        let current = this.head
        let i = 0
        for (; i < this.count && current; i++){
            const comResult = this.compareFn(item,current.item)
            if (comResult === Compare.LESS_THAN){
                return i
            }
            current = current.next
        }
        return i
    }
}