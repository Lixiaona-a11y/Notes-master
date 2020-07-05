// 空间复杂度O(1)
// 平均：时间复杂度O(n2) 
// 最坏：时间复杂度O(n2) 
// 最好：时间复杂度O(n) 
// 稳定性：稳定
function bubbleSort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
            }
        }
    }
    return arr;
}

let array=[1,3,4,2,7,5,3];
console.log(bubbleSort(array));
