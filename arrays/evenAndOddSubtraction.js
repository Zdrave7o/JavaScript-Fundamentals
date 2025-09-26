function evenOddSubtraction(numbers){
    let evenSum = 0;
    let oddSum = 0;

    for(let number of numbers){
        number % 2 === 0 ? evenSum+=number:oddSum+=number;
    }

    return evenSum - oddSum;
}

console.log(evenOddSubtraction([2,4,6,8,10]));