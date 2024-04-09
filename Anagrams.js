function anagram(str1,str2){
    let str1Arr = str1.split("");
    let str2Arr = str2.split("");
    let flag = true;

    if(str1Arr.length != str2.length){
        flag = false;    
    }else{
        for(let i=0;i<str1Arr.length;i++){
            if(!str2Arr.includes(str1Arr[i])){
                flag = false;
                break;
            }
        } 
    }

    if(flag == false){
        console.log("not Anagram");
    }else{
        console.log("Anagram");
    }
}

anagram("silent","listen");