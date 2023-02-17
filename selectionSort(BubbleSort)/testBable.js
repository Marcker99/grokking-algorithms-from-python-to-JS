

    function bubleSelection(arr){
        let arrCopy = Array.from(arr)
        let item = arr.length
        for(let i = 0;i < item;i++){
            let min = i
            for(j = i;j< item;j++){
                if(arrCopy[j] < arrCopy[min]){
                    min = j
                }
            }
            if(min != i){
                let tmpt = arrCopy[i]
                arrCopy[i] = arrCopy[min]
                arrCopy[min] = tmpt
            }
        }
        return arrCopy
    }




    let someArr = [
        26, 79, 10, 84, 82, 97, 84, 13, 89, 11, 60, 47,
        33, 12, 90, 90, 19,  6, 93, 79, 17, 36, 56, 63,
        61, 22,  7, 24, 51, 68, 31, 22,  2, 40, 39, 12,
        55, 38, 85, 85, 48, 52, 71, 13, 71,  6, 90, 57,
        93, 23, 61, 90, 80,  5, 18, 11, 98, 95, 53, 46,
        21, 66, 51, 14,  7, 84, 42, 75, 15, 17, 26, 93,
        75, 37, 19, 93, 54, 11,  7, 93, 28, 80, 15, 96,
        72, 91, 60, 77, 24, 51, 29, 93,  6, 17, 77, 53,
        30, 64, 28, 64]

    console.log(bubleSelection(someArr))