function selectionSort(arr){
    let minIndex;
    for(let i=0;i<arr.length-1;i++){
        minIndex=i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[minIndex]){
                minIndex=j;
            }
        }
        if(minIndex!==i){
            [arr[i],arr[minIndex]]=[arr[minIndex],arr[i]];
        }
    }
    return arr;
}
var array=[2,4,4,1,6,7,2,1];
console.log(selectionSort(array))