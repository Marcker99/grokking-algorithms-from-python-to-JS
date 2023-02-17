let mas = []
function getArr(arr){
let num = 101
for(let i = 1;i < num;i++){
    arr.push(i)
}
    return arr 
}

getArr(mas)

mas.shift()
console.log(mas[0])
