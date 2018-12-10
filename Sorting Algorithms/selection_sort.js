// Selection Sort
// swapping each time when min value found
function selectionSort(array) {
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if (array[i] > array[j]) {
                swap(array, i, j);
            }
        }
    }
    console.log(array);
}
// instead of swaping each time, we are using a variable to store index of that min value and then swapping at the end
function selectionSort2(array) {
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (array[i] > array[j]) {
                min = j;
            }
        }
        if (min !== i)
            swap(array, min, i);
    }
    console.log(array);
}

function swap(a, i, j) {
    [a[i], a[j]] = [a[j], a[i]];
    return;
}
let unsorted = [2, 4, 1, 5, 3, 7, 2, 4, 1, 5, 3, 7, 2, 4, 1, 5, 3, 7, 2, 4, 1, 5, 3, 7, 2, 4, 1, 5, 3, 7, 2, 4, 1, 5, 3, 7, 2, 4, 1, 5, 3, 7, 2, 4, 1, 5, 3, 7];
console.time()
selectionSort(unsorted);
console.timeEnd();
console.time()
selectionSort2(unsorted);
console.timeEnd();