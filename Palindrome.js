function palindrome(str){
    let arr = str.split("");
    let revArr = str.split("").reverse();
    let flag = true;
    
    for(let i=0;i<arr.length;i++){
        if(arr[i] != revArr[i]){
            flag = false;
            break;
        }
    }
    if(flag == false){
        console.log("Not a Palindrome");
    }else{
        console.log("palindrome");
    }
}

palindrome("malayala");