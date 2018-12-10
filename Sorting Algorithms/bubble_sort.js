function bubbleSort(a){
	const length = a.length;
	for(let i = 0; i < length - 1; i++  ){
		for(let j = 0; j < length-1-i; j++ ){
			if(a[j]>a[j+1]){
				swap(a,j,j+1);
			}
		}
	}
	console.log(a);
}

function swap(a, i, j) {
    [a[i], a[j]] = [a[j], a[i]];
    return;
}
let unsorted = [2, 4, 1, 5, 3, 7, 2, 4, 1, 5, 3, 7, 2, 4, 1, 5, 3, 7, 2, 4, 1, 5, 3, 7, 2, 4, 1, 5, 3, 7, 2, 4, 1, 5, 3, 7, 2, 4, 1, 5, 3, 7, 2, 4, 1, 5, 3, 7];
console.time()
bubbleSort(unsorted);
console.timeEnd();