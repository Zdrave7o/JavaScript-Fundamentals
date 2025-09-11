function isAmazing(n){
    let num = String(n);
    let result = 0;

    for(let i = 0; i<num.length; i++){
        result+=Number(num[i]);
    }

    num=String(result);
    console.log(`${n} Amazing? ${num.includes("9")? "True":"False"}`);
}

isAmazing(999);