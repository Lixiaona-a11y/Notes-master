/*
	循环迭代版：三指针 逐一向后移动
	- 为了不失去对链表头的所有权，我需要保存1的next指针，于是使用nextNode变量进行保存

*/
function reverse(Linked) {
  if(Linked==null||Linked.next===null){
    return;
  }
  var prev=null,
      cur=Linked,
      nextNode=null;
  while(cur!==null){
    nextNode=cur.next;
    cur.next=prev;
    prev=cur;
    cur=nextNode;
  }
  return prev;
}



var obj3 = {
  name:'obj3',
  next:null
}
var obj2 = {
  name:'obj2',
  next:obj3
}
var obj1 = {
  name:'obj1',
  next:obj2
}

console.log(reverse(obj1));
