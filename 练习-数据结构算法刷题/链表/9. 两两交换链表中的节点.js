function swapPairs (head) {
// base case
    if(!head){
		return null;
	}
	if(!head.next) {
		return head;
	}
	let firstNode = head;
	let secondeNode = head.next;

	firstNode.next = swapPairs(secondeNode.next);
	secondeNode.next = firstNode;
	return secondeNode;
}