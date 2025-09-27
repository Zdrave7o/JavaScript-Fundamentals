function addAndSubtract(input){
    let filteredArr = [];
    for(let i = 0; i < input.length; i++){
        const num = input[i];
        filteredArr[i] = num % 2 === 0? num + i: num - i;
    }

    console.log(filteredArr);
    console.log(input.reduce((acc, curr) => acc + curr, 0));
    console.log(filteredArr.reduce((acc, curr) => acc + curr, 0));
    
    
    
}

addAndSubtract([-5, 11, 3, 0, 2]);