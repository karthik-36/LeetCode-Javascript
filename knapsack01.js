(function main() {
    console.log('Hello World!');
    let weight = [2,3,5,1,4];
    let points = [4,5,7,2,4];
    let maxCarry = 10;

    function maxprofit(weight , points , maxCarry , n){
        if(n == -1 || maxCarry == -1){
            return 0;
        }else if(weight[n] > maxCarry){
                 return maxprofit(weight, points, maxCarry  , n - 1);
                 }else{
                   let noSelect = maxprofit(weight , points , maxCarry , n - 1);
                   let select = points[n] + maxprofit(weight , points , maxCarry - weight[n] , n - 1);
                     console.log(select + "   " + weight[n]);
                   return Math.max(noSelect , select);
                 }
    }

    let res = maxprofit(weight, points , maxCarry , 4);
    console.log("hello : " + res);

}());
