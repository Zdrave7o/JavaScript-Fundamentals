function triangle(n){
    let message = "";
    for(let i = 1; i <= n; i++){
       for(let j = 1; j <= i; j++){
        message += `${i} `;
       }
       message +="\n"
    }
    
    return message;
    
}

console.log(triangle(5));
