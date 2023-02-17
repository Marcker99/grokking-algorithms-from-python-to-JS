function selectionSort(inputArr) {
    let n = inputArr.length; //довжина массиву.
    for (let i = 0; i < n; i++) {
        // Знаходимо найменше число в  массиві
        let min = i; // min  кожну ітерацю буде зростати на i, тоб то на 1
        for (let j = i; j < n; j++) {   //j теж кожну інтерацю буде починатися на 1 більше,тим самим зменшить кількість ітерацій.
            if (inputArr[j] < inputArr[min]) {
                min = j;                  //<-- пошук найменшого значення ,від певної позиції
            }
        }
        if (min != i) {
            // міняємо місцями елементи
            let tmp = inputArr[i];
            inputArr[i] = inputArr[min]; // на місце і ми сатавимо мінімальне число, бо і йде від початку 
            inputArr[min] = tmp; //а місце яке колись займало мінімальне число ,буде займати число яке більше
        }                        //за нього, тобто число яке було під індексом і.
        
    }
    return inputArr;

}// таким чином з кожної ітерації шукається 

console.log(selectionSort([109,33,44,56,76,95,15,42,51,4,3,1,6,7,83]))