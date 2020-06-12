class minHeap{

    constructor(){
      this.heap = [null];
    }

    insert(num){

        console.log("insert : " + num);

        this.heap.push(num);

        if(this.heap.length > 2){
            let idx = this.heap.length - 1;
          //  console.log(this.heap[Math.floor(idx/2)] + "  xxx  " + this.heap[idx]);
            while(this.heap[Math.floor(idx/2)] > this.heap[idx]){
              [this.heap[Math.floor(idx/2)] ,  this.heap[idx]] = [this.heap[idx] , this.heap[Math.floor(idx/2)]];
          //    console.log(this.heap[Math.floor(idx/2)] + "  xxx  " + this.heap[idx]);
                if(Math.floor(idx/2) > 1){
                  idx = Math.floor(idx/2);
                }
                else{
                  break;
                }
            }
        }

    }

    remove(){
        console.log("remove");
        if(this.heap.length > 2){

          this.heap[1] = this.heap[this.heap.length - 1];
          this.heap.pop();
          let idx = 1;
          let left = idx * 2;
          let right = (idx * 2) + 1;

          while(this.heap[idx] > this.heap[left] || this.heap[idx] > this.heap[right] ){
            console.log("idx : " +  idx + " Left : " + left + "  Right : " + right);
            console.log("idx : " +  this.heap[idx] + " Left : " + this.heap[left] + "  Right : " + this.heap[right]);

                if(this.heap[left]  <  this.heap[right] ){
                  console.log("left");
                  [this.heap[idx] , this.heap[left]] = [ this.heap[left] , this.heap[idx]]
                  idx = idx * 2;
                }
                else if(this.heap[left]  >  this.heap[right]){
                  console.log("right");
                  [this.heap[idx] , this.heap[right]] = [ this.heap[right] , this.heap[idx] ]
                  idx = (idx * 2) + 1;
                }
                else if(this.heap[left] < this.heap[idx]){
                  [this.heap[idx] , this.heap[left]] = [ this.heap[left] , this.heap[idx]]
                  break;
                }
                else if(this.heap[right] < this.heap[idx]){
                  [this.heap[idx] , this.heap[right] ] = [ this.heap[right] , this.heap[idx]]
                  break;
                }

                console.log("Left : " + this.heap[left] + "  Right : " + this.heap[right]);
                console.log(" \n ");
                left = 2 * idx;
                right = (2 * idx) + 1;

                if(this.heap[left] == undefined && this.heap[right] == undefined){
                  console.log("break");
                  break;
                };
            }

          }
          else if(this.heap.length == 2){
             this.heap.pop();
          }
          else{
            return null;
          }

        }

    peek(){
      return this.heap[1];
    }

}

let heap = new minHeap();

heap.insert(5);
console.log("peak : " + heap.peek());
heap.insert(15);
heap.insert(14);
heap.insert(12);
heap.insert(9);
heap.insert(4);
heap.insert(25);
console.log(heap.heap);
console.log("peek : " + heap.peek());
heap.remove();
console.log(heap.heap);
