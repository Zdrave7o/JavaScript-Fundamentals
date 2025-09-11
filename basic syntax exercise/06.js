function sum(a, b){
    let sum = 0;
    let message = "";
    for(let i = a; i<= b; i++){
        message += `${String(i)} `;
        sum+=i;
    }
    message += `\nSum: ${sum}`;
    return message;
}

console.log(sum(50, 60));