function indexof(arr,val){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===val){
            return i;
        }
    }
    return -1;
}
let array = [1, 3, 3, 5, 4, 1];
console.log(indexof(array, 0));