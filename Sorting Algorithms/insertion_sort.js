function insertionSort(a) {
    const n = a.length;
    for (let i = 1; i < n; i++) {
        let val = a[i];
        let hole = i;
        for (let j = i - 1; j >= 0; j--) {
            if (a[j] < val) {
                break;
            } else {
                a[hole] = a[j];
                hole = j;
            }
        }
        a[hole] = val;
    }
    console.log(a);
}

let unsorted = [30, 40, 10, 20, 15, 25, 65, 35];
console.time()
insertionSort(unsorted);
console.timeEnd();