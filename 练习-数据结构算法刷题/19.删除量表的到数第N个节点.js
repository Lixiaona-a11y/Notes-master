/**
 * 难度
中等

984

给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
示例：
给定一个链表: 1->2->3->4->5, 和 n = 2.

当删除了倒数第二个节点后，链表变为 1->2->3->5.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// 第一步: l 与 r 的距离为 n + 1;
//   l                r
// dummy -> 1 -> 2 -> 3 -> 4 -> 5 -> null

// 第二步: 始终保持 l 与 r 的距离为 n + 1, 向右移动, 直到 r 为 null, 此时 l 的位置就是要删除节点上一个的位置。
//                    l               r
// dummy -> 1 -> 2 -> 3 -> 4 -> 5 -> null
function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let l = dummy;
    let r = dummy;
    let offset = n + 1;
    while (offset--) {
        r = r.next;
        if (offset > 1 && r == null) {
            return dummy.next;
        }
    }
    while (r) {
        l = l.next;
        r = r.next;
    }
    l.next = l.next.next;
    return dummy.next;
};

