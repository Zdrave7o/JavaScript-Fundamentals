function sum(input){
    let firstElement = Number(input[0]);
    let lastElement = Number(input[input.length - 1]);

    return firstElement + lastElement;    
}

console.log(sum([10,20,30]));