function sort(a, b, c){
    a=Number(a);
    b=Number(b);
    c=Number(c);

    let numbers = [a, b, c];

    numbers=numbers.sort((x, y) => y-x)
    
    console.log(numbers.join("\n"));
}

sort(2, 0, 0);