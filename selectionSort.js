function selectionSort(inputArr) { 
    let n = inputArr.length;
        
    for(let i = 0; i < n; i++) {
        let min = i;
        for(let j = i+1; j < n; j++){
            if(inputArr[j] < inputArr[min]) {
                min=j; 
            }
         }
         if (min != i) {
             let tmp = inputArr[i]; 
             inputArr[i] = inputArr[min];
             inputArr[min] = tmp;      
        }
    }
    return inputArr;
}

console.log(selectionSort([5,3,2,1,90,6]));
console.log(selectionSort(['M','C','O','A','D','L']));
console.log(selectionSort(['pera','laranja','uva','melancia','ameixa','maça']));