function round(a, b){
    a = Number(a);
    b = Number(b);
    if(b>15){
        b = 15;
    }

    let result = a.toFixed(b);
    result = parseFloat(result);

    return result;
}

console.log(round(10.5, 3));