function calc(input){
    let index = 0;

    while(index < input.length){
        let n = Number(input[index]);

        if(n<0){
            console.log("Negative number!");
            break;
        }

        console.log(`Result ${(n*2).toFixed(2)}`)

        index++;
    }
}

calc([23.43,
12.3245,
0,
65.23432,
23,
65,
-12
])