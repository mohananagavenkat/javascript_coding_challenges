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
// bubble sorting with flag variable
function bubbleSort2(a) {
	const length = a.length;
	for (let i = 0; i < length - 1; i++) {
		let flag = false;
		for (let j = 0; j < length - 1 - i; j++) {
			if (a[j] > a[j + 1]) {
				swap(a, j, j + 1);
				let flag = true;
			}
		}
		if(flag == false){
			break;
		}
	}
	console.log(a);
}

function swap(a, i, j) {
    [a[i], a[j]] = [a[j], a[i]];
    return;
}
let unsorted = [30, 40, 10, 20, 15, 25, 65, 35];
console.time()
bubbleSort(unsorted);
console.timeEnd();