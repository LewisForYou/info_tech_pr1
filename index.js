/* Задача: посчитать максимальную площадь треугольника, если дан массив от 0 до 50
 Очевидно, что это будут три последние числа, тогда берём их */

let firstNum = 1
let secondNum = 50

Calc(firstNum, secondNum)
function Calc(firstNum, secondNum){
    if((secondNum || firstNum) < 0){ //проверяем больше ли нуля числа 
        console.log(`Входные числа не могут быть меньше нуля!`);
    } else {
        let arr = []
        for(let i = firstNum; i <= secondNum; i++){
        arr.push(i)
        }
        if (arr.length > 3){ // если больше трех чисел в массиве
            let newArr = arr.slice(-3)
            let a = newArr[0]
            let b = newArr[1]
            let c = newArr[2]
            console.log(`Сторона 1 = ${a}, сторона 2 = ${b}, сторона 3 = ${c}`)
            let p = (a + b + c) / 2
            let Sum = Math.sqrt(p*(p-a)*(p-b)*(p-c))
            console.log(`Плоащль треугольника - ${Sum}`)
        } else {
            console.log(`Длина масива минимум 3 числа, у вас - ${arr.length}`)
        }
    }
}