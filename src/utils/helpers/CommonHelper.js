export function Debounce(func,dely){
    let timer;
    return function(...args){
        clearTimeout(timer)
        timer=setTimeout(() => {
            func.apply(this,args)
        }, dely);
    }
}