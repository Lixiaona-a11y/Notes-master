/**
 * 快慢指针，
 * @param node
 * @returns {*}
 * @constructor
 */
/**
 * 情况一：如果快指针可以前进的条件是：
 *        当前快指针和当前快指针的下一个节点都是非空，
 *        则当节点个数为奇数时，slow节点落在链表的中间节点，
 *          当节点个数为偶数时，slow节点落在靠右的中间节点。
 * @param {} node 
 */
function FindMiddleNode1 (node){
	if(node==null){
		return;
	}
	let slow=node;
	let fast=node;
	while(fast&&fast.next){
		slow=slow.next;
		fast=fast.next.next;
	}
	return slow;
}

/**
 * 情况二：如果快指针可以前进的条件是：
 *        当前快指针下一个节点和下下个节点都是非空，
 *        则当节点个数为奇数时，slow节点落在链表的中间节点，
 *          当节点个数为偶数时，slow节点落在靠右的中间节点。
 * @param {} node 
 */
function FindMiddleNode2 (node){
	if(node==null){
		return;
	}
	let slow=node;
	let fast=node;
	while(fast.next&&fast.next.next){
		slow=slow.next;
		fast=fast.next.next;
	}
	return slow;
}


var obj4 = {
	name:'obj4',
	next:null
  }
var obj3 = {
	name:'obj3',
	next:obj4
  }
var obj2 = {
	name:'obj2',
	next:obj3
  }
var obj1 = {
	name:'obj1',
	next:obj2
  }
  
console.log(FindMiddleNode2(obj1));