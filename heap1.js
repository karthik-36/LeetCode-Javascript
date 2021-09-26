let minHeap = function () {


    let heap = [null];


    this.getParent = function (idx) {
        return heap[Math.floor(idx / 2)];
    }

    this.insert = function (num) {
        heap.push(num);
        if (heap.length > 2) {
            let idx = heap.length - 1;

            while (heap[idx] < this.getParent(idx)) {
                if (idx >= 1) {
                    [heap[idx], heap[Math.floor(idx / 2)]] = [this.getParent(idx), heap[idx]];

                    if (Math.floor(idx / 2) > 1) {
                        idx = Math.floor(idx / 2);
                    }
                    else {
                        break;
                    }

                }
            }

        }
    }




    this.remove = function () {
        let smallest = heap[1];

        if (heap.length > 2) {
            heap[1] = heap[heap.length - 1];
            heap.splice(heap.length - 1);
            if (heap.length == 3) {
                if (heap[1] > heap[2]) {
                    [heap[1], heap[2]] = [heap[2], heap[1]];
                }
                return smallest;
            };

            let i = 1;
            let left = 2 * i;
            let right = 2 * i + 1;

            while (heap[left] <= heap[i] || heap[right] <= heap[i]) {
                if (heap[left] < heap[right]) {
                    [heap[left], heap[i]] = [heap[i], heap[left]];
                    i = i * 2;
                } else {
                    [heap[right], heap[i]] = [heap[i], heap[right]];
                    i = (i * 2) + 1;
                }
                left = i * 2;
                right = i * 2 + 1;

                if (heap[left] == undefined || heap[right] == undefined) {
                    break;
                }

            }
        }
        else if (heap.length == 2) {
            heap.splice(1, 1);
        }
        else {
            return null;
        }
        return smallest;
    }



    this.sort = function(){
        let result = new Array();
        while(heap.length > 1){
            result.push(this.remove());
        }
        return result;
    }

}

let x = new minHeap();
x.insert(40);
x.insert(13);
x.insert(17);

x.insert(31);
x.insert(21);
x.insert(14);
x.insert(12);
x.insert(15);
x.insert(11);
x.insert(13);
x.insert(15);
console.log(x.remove());
console.log(x.remove());

console.log(x.remove());
console.log(x.remove());
console.log(x.remove());
console.log(x.remove());

console.log(x.sort());

//minHeap