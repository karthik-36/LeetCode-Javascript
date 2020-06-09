(function main() {
    console.log('Hello World!');
    let weight = [2,3,5,1,4];
    let points = [4,5,7,2,4];
    let maxCarry = 10;

    let mat = new Array(5);
    for(var i = 0 ; i < mat.length ; i++){
        mat[i] = new Array(maxCarry + 1).fill(-1);
    }

    console.log(mat[weight.length - 1][maxCarry - 1]);

    function maxprofit(weight , points , maxCarry , n){
        if(n  == -1 || maxCarry == -1){
            return 0;
        }else if(weight[n] > maxCarry){
            console.log("here");

            if(n == 0){
                return 0;
            }else{
            if(mat[n-1][maxCarry] == -1){
                mat[n-1][maxCarry] = maxprofit(weight, points, maxCarry  , n - 1);
                return mat[n-1][maxCarry];
            }else{
                return mat[n-1][maxCarry];
            }
            }
        }else{

                let noSelect;
                let select;

                    noSelect =  maxprofit(weight , points , maxCarry , n - 1);




                      select = points[n] + maxprofit(weight , points , maxCarry - weight[n] , n - 1);



                     console.log(select + "   " + weight[n]);
                      console.log(n + "   " + maxCarry);

                    if(n > 0){
                        if(mat[n-1][maxCarry] == -1){
                        mat[n-1][maxCarry] = Math.max(noSelect , select);
                        return mat[n-1][maxCarry];
                        }else{
                            return mat[n-1][maxCarry];
                        }
                    }else{
                        return Math.max(noSelect , select);
                    }

                 }
    }

    let res = maxprofit(weight, points , maxCarry , 4);
    console.log("hello : " + res);
    console.log(mat);

}());
