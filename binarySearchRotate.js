let arr = [7, 8, 10, 12, 16, 2, 3, 5, 6];
arr = [10, 12, 13, 14, 16, 2, 3, 4, 5, 6, 7, 8, 9,];

let toSearch = 16;

console.log("to search : " + toSearch);
let binarySearch = function (arr) {

    let mid = Math.floor(arr.length / 2);
    console.log("arr : " + arr + "     mid pos : " + mid + "   " + "mid val : " + arr[mid]);
    if (arr[mid] == toSearch) {
        console.log("yes it exists");
        return "found";
    }
    else if (arr[mid] > toSearch) {
        binarySearchR(arr.slice(0, mid));
    }
    else if (arr[mid] < toSearch) {
        binarySearchR(arr.slice(mid + 1, arr.length));
    }

    else {
        return "not found";
    }
}



let binarySearchRotate = function (arr) {

    let mid = Math.floor(arr.length / 2);
    console.log("arr : " + arr + "     mid pos : " + mid + "   " + "mid val : " + arr[mid]);

    console.log(arr[0],arr[mid],arr[arr.length-1]);

    if (arr[mid] == toSearch) {
        console.log("yes it exists");
        return "found";
    }

    // left side valid
    else if (arr[mid] >= arr[0]) {
        console.log("left valid " + arr.slice(0, mid) + "    " + toSearch + "  < "+ arr[mid - 1] + "   " +  arr[0] + "  <  "+ toSearch);
        if (toSearch <= arr[mid - 1] && arr[0] <= toSearch) {
            binarySearchRotate(arr.slice(0, mid));
        } else {
            binarySearchRotate(arr.slice(mid + 1, arr.length));
        }
    }

    // right side valid
    else if (arr[arr.length - 1] >= arr[mid]) {
        console.log("right valid " + arr.slice(mid + 1, arr.length));
        if (toSearch >= arr[mid] && arr[arr.length - 1] >= toSearch) {
            binarySearchRotate(arr.slice(mid + 1, arr.length));
        } else {
            binarySearchRotate(arr.slice(0, mid));
        }
    }


}



binarySearchRotate(arr);