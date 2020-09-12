function findSecond(arr){
    let temp,min;
    for(let i=0;i<arr.length-1;i++){
        min=i;
        for(let j=0;j<arr.length;j++){
            if(arr[j]<arr[min]){
                [arr[j],arr[i]]=[arr[i],arr[j]];
                min=j;
            }
        }
    }
    return 
}