function selectionSort(arr) {
    let newArr = [];
    while (arr.length > 0) {
        let smallest = arr[0];
        let smallestIndex = 0;
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < smallest) {
                smallest = arr[i];
                smallestIndex = i;
            }
        }
        newArr.push(arr.splice(smallestIndex, 1)[0]);
    }
    return newArr;
}

console.log(selectionSort([5, 3, 6, 2, 10]));


