console.log("hello world");

class Node{
  constructor(data){
      this.val = data;
      this.next = null;
  }
}

let n1 = new Node(5);
console.log(n1.val);
n1.next  = new Node(10);
n1.next.next = new Node(15);
console.log(n1);


let curr = n1;
while(curr != null){
  console.log(curr.val);
  curr = curr.next;
}
//console.log(n1.val)
