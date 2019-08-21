const defaultToString = (item) => {
    if (item === null){
        return 'null'
    }else if (item === undefined){
        return 'undefined'
    }else if(typeof item === 'string' || item instanceof String){
        return `${item}`
    }
    return item.toString()
}

module.exports = defaultToString