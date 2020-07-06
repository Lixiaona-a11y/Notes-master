/**
 * 解法一：数组判重
 * @param {} node 
 */
function checkLoop1(node) {
	let res=[];
	while(node&&node.next){
		if(res.includes(node)){
			return true;
		}else{
			res.push(node);
		}
		node=node.next;
	}
	return false;
}


/**
 * 解法二：标记法:标识过的，当下次再遇到说明在绕圈子
 * @param {} node 
 */
function checkLoop2(node){
	while(node&&node.next){
		if(node.flag){
			return true;
		}else{
			node.flag=1;
			node=node.next;
		}
	}
	return false;
}

function checkLoop3(node) {
	if(!node||!node.next){
		return false;
	}
	let fast=node.next,
		slow=node;
	while(fast!==slow){
		if(!fast||!fast.next){
			return false;
		}
		fast=fast.next.next;
		slow=slow.next;
	}
	return true;
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
// obj4.next=obj2;
  
console.log(checkLoop3(obj1));