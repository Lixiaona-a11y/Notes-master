function findK (arr,target,k) {
  /**
   * 658. 找到 K 个最接近的元素

     给定一个排序好的数组，两个整数 k 和 x，从数组中找到最靠近 x（两数之差最小）的 k 个数。返回的结果必须要是按升序排好的。如果有两个数与 x 的差值一样，优先选择数值较小的那个数。
     示例 1:
      输入: [1,2,3,4,5], k=4, x=3
      输出: [1,2,3,4]
 
    示例 2:
      输入: [1,2,3,4,5], k=4, x=-1
      输出: [1,2,3,4]
 
    说明:
      k 的值为正数，且总是小于给定排序数组的长度。
      数组不为空，且长度不超过 104
      数组里的每个元素与 x 的绝对值不超过 104
   * 先找到最接近target的两个数，然后和mergeSort一样，形如中心开花
   */
  let leftBaf = 0,
      rightBaf = arr.length - 1,
      mid = 0,
      result = new Array(k),
      n = 0,
      leng = arr.length;
  // 1.
  while(leftBaf < rightBaf - 1) {
    mid = Math.floor((leftBaf + rightBaf ) / 2);
    // 只需要确定左右边界即可，所以不需要判断mid,并且要保留mid，不能跳过
    if(arr[mid] < x) {
      leftBaf = mid;
    }else {
      rightBaf = mid;
    }  
  }
  // 2.
  while(n < k && leftBaf >= 0 && rightBaf < leng) {
    if(Math.abs(arr[leftBaf] - x) <= Math.abs(arr[rightBaf] - x)){
      result[n++] = arr[leftBaf--]
    }else {
      result[n++] = arr[rightBaf++]
    }
  }
  // 边界处理
  while(n < k && leftBaf >= 0) {
    result[n++] = arr[leftBaf--];
  }
  while(n < k && rightBaf < leng) {
    result[n++] = arr[rightBaf++];
  }
  return result.sort((a,b) => a - b);
}
