function sum(n){
    n = Number(n);
    let sum = 0;
    let count = 0;
    for(let i = 0; i <= 1000; i++){
        if (count >= n){
            break;
        }
        if(i % 2 === 1){
            sum+=i;
            count++;
            console.log(i);
        }
    }

    console.log(`Sum: ${sum}`)
}

sum(5);