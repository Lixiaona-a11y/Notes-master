// 空间复杂度O(1);
// 平均:时间复杂度O(nlogn)
function mergeSort(arr){
    const merge=function(left,right){
        let result=[],
            il=0,
            ir=0;
        while(il<left.length&&ir<right.length){
            if(left[il]<right[ir]){
                result.push(left[il++]);
            }else{
                result.push(right[ir++]);
            }
        }
        while(il<left.length){
            result.push(left[il++]);
        }
        while(ir<right.length){
            result.push(right[ir++]);
        }
        return result;
    }
    const mergeSortRec=function(arr){
        if(arr.length===1){
            return arr;
        }
        let mid=Math.floor(arr.length/2);
        let left=arr.slice(0,mid);
        let right=arr.slice(mid,arr.length);
        return merge(mergeSortRec(left),mergeSortRec(right));
    }
    return mergeSortRec(arr);
}

var array=[2,4,4,1,6,7,2,1];
console.log(mergeSort(array));