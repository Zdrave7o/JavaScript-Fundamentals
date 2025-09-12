function calculate(a, operator, b){
    a = Number(a);
    operator = String(operator)
    b = Number(b);

    return eval(`${a} ${operator} ${b}`).toFixed(2);
}

console.log(calculate(5,

'+',

10))