let arr = [6, 3, 1, 2, 0, 9, 7, 8];

for(let i = 0; i < arr.length; i++){
	let max = 0;
	let j;
	for(j = 1; j < arr.length - i; j++){
		if(arr[j] > arr[max])
			max = j;
	}
	let aux = arr[j - 1];
	arr[j - 1] = arr[max];
	arr[max] = aux;
}

console.log(arr);