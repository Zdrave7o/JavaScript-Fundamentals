function solve(a, b, c){
    let sum = a+b+c;

    const type = Number.isInteger(sum) === true? "Integer":"Float";

    return `${sum} - ${type}`;
}

console.log(solve(9, 100, 1.1));
