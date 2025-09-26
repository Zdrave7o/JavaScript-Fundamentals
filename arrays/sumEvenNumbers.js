function sumEvenNumbers(input){
    let sum = 0;
    for(let el of input){
        if(Number(el) % 2 === 0){
            sum+= Number(el);
        }
    }

    console.log(sum);
    
}

sumEvenNumbers(['3','5','7','9']);