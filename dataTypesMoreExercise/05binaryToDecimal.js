function convertToDecimal(str){
    let sum = 0;
    let power = 0;
    for(let i = str.length - 1; i>=0; i--){
        let number = Number(str[i]);
        
        sum+=(2**power)*number;

        power++;
    }

    return sum;
}

console.log(convertToDecimal("11110000"));