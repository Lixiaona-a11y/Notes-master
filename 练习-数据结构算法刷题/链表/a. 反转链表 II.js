var reverseBetween = function(head, m, n) {
    if(m===n){
        return head;
    }
    let dummy=new ListNode(0);
    dummy.next=head;
    let a=dummy,d=dummy;
    for(let i=0;i<m-1;i++){
        a=a.next;
    }
    for(let j=0;j<n;j++){
        d=d.next;
    }
    b=a.next;
    c=d.next;
    for(let p=b,q=p.next;q!==c;){
        let o=q.next;
        q.next=p;
        p=q;
        q=o;
    }
    a.next=d;
    b.next=c;
    return dummy.next;
};