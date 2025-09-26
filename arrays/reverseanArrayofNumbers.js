function reverse(n, inputArr){
    const reversedArr = [];
    for(let i = n - 1; i>=0; i--){
        const element = inputArr[i];

        reversedArr.push(element);
    }

    console.log(reversedArr.join(" "));
}

reverse(4, [-1, 20, 99, 5]);
