
function maxAndMin(arr){
    let max = arr[0];
    let min = arr[0];

    for(let i=1;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i];
        }
        else if(arr[i]<min){
            min = arr[i];
        }
    }

    console.log(`Maximum element is ${max} and minimum element is ${min}`);
}

maxAndMin([578,2,3,34,5]);