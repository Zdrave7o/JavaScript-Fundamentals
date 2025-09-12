function solve(n){
    let sum = 0;
    let str = n.toString();
    for(char in str){
        let digit = Number(str[char]);
        sum += digit;
    }

    return sum;
}

console.log(solve(543));