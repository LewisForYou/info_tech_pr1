function calc(){
let arr = []
for(let i = 1; i <= 50; i++){
    arr.push(i)
}
let newarr = arr.slice(-3)

// const k  = new Set(newarr)
// let sort = arr.filter(e => !k.has(e))
// console.log(sort)

let a = newarr[0]
let b = newarr[1]
let c = newarr[2]
console.log(a, b, c)
let g = (a + b +c)
console.log(g)
let p = g / 2
console.log(p)
let s = p*(p-a)*(p-b)*(p-c)
let res = Math.sqrt(s)
console.log(res)
}
calc()