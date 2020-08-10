console.log("hello");
class maxHeap {


  constructor() {
    this.heap = [null];
  }


  fullHeap() {
    console.log(this.heap);
  }


  insert(num) {
    console.log("insert : " + num);
    this.heap.push(num);
    if (this.heap.length > 2) {
      let index = this.heap.length - 1;
      let parent = Math.floor(index / 2);
      while (this.heap[index] > this.heap[parent]) {
        console.log(this.heap[index] + "  >  " + this.heap[parent]);
        [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]];
        index = parent;
        parent = Math.floor(index / 2);
        console.log(index + "  index : parent  " + parent);
        if (index == 1) {
          break;
        }
      }
    }
  }


  remove() {
    if (this.heap.length >= 2) {
      this.heap[1] = this.heap[this.heap.length - 1];
    } else {
      this.heap = [null];
    }
  }

  peek() {
    return this.heap[1];
  }


}

let xheap = new maxHeap();
xheap.insert(4);
xheap.insert(5);
xheap.insert(8);
xheap.insert(2);
xheap.fullHeap();
console.log(xheap.peek());