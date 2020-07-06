function insertTarget (node,target){
	// 不做处理
	if(node === null || target == null) {
		return;
	}
	// 头部情况
	if(node.val > target.val) {
		target.next = node;
		return target;
	}
	// 中间情况
	var runNode = node;
	while(runNode.next && runNode.next.val < target.val) {
		runNode = runNode.next;
	}
	// 找到正确位置，包含了两种情况：在中间 和直接到尾部；
	// 此时情况是：runNode的next节点大于target，需要在runNode和runNode.next切刀
	// 并将target拼接起来
	runNode.next = target;
	if(runNode.next !== null){ // 如果runNode已经到达链表的尾部，不需要拼接
		target.next = runNode.next;
	}
	return node;
}

var obj5={
	val:3,
	next:null
}
var obj4 = {
	val:7,
	next:null
  }
var obj3 = {
	val:5,
	next:obj4
  }
var obj2 = {
	val:2,
	next:obj3
 }
var obj1 = {
	val:1,
	next:obj2
  }


  console.log(insertTarget(obj1,obj5))