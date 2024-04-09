

function fibboSeries(n){
    let a = 0;
    let b = 1;
    let arr = [0,1];
    for(let i=3;i<=n;i++){
        let temp = a+b;
        a = b;
        b = temp;
        arr.push(b);
    }
    return arr;
}

console.log(fibboSeries(6));