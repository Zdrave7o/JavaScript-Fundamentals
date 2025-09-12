function convert(n){
    n = Number(n);

    return (n*1.31).toFixed(3);
}

console.log(convert(80));