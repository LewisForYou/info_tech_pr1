let arr = [49, 49, 48, -10, 8];

Calculate(arr)
function Calculate(arr){
    if (arr.length < 3){
        console.log(`Длина массива меньше трёх числе!`)
    } else {
        arr.length = 3
        arr.sort((a, b) => b - a);
        if ((arr[0] && arr[1] && arr[2]) > 0){
            let a = arr[0]
            let b = arr[1]
            let c = arr[2]
            console.log(`Сторона 1 = ${a}, сторона 2 = ${b}, сторона 3 = ${c}`)
            let p = (a + b + c) / 2
            let Sum = Math.sqrt(p*(p-a)*(p-b)*(p-c))
            console.log(`Плоащль треугольника - ${Sum}`)
        } else {
            console.log(`В массиве имеется отрицательное число!`)
        }
    }
}
