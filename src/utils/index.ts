// 0
export const isFalsy = (value: unknown) => {
    return value === 0 ? false: !value
}

// 去处对象里面空值
export  function clearObject(obj: object){
    const result = {...obj}
    Object.keys(obj).forEach(key => {
        // @ts-ignore
        if(isFalsy(obj[key])){
            // @ts-ignore
            delete result[key]
        }
    })
    return result
}