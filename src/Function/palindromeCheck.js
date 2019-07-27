const Deque = require('../Data/Deque')

//回文检查
function palindromeCheck(str){
    if (str === undefined || str === null || (str !== null && str.length === 0)){
        return false
    }
    const deque = new Deque()
    //抓换成小写并去空格
    const strFormat = str.toLocaleLowerCase().split(' ').join('')
    let isEqual = true
    let firstChar,lastChar
    for (i = 0; i < strFormat.length; i++){
        deque.addBack(strFormat.charAt(i))
    }

    //当字符长度小于等于1时仍然是回文，该字符即为回文
    while (deque.size() > 1 && isEqual){
        firstChar = deque.removeFront()
        lastChar = deque.removeBack()
        if (firstChar !== lastChar){
            isEqual = false
        }
    }
    return isEqual
}

//example:
const level = 'level'
console.log(`${level} is ${palindromeCheck(level)}`)
const madam = 'madam'
console.log(`${madam} is ${palindromeCheck(madam)}`)
const problem = 'problem'
console.log(`${problem} is ${palindromeCheck(problem)}`)