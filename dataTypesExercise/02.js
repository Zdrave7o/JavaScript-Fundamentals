function solve(p1, p2, p3){
    let input = `${p1}${p2}${p3}`;
    let reversedInput = "";
    for(let i = input.length - 1; i>=0; i--){
        reversedInput += input[i];
    }
    let asciiValue = "";
    for(let i = 0; i < 3; i++){
        asciiValue+=reversedInput.charCodeAt(i) + " "
    }

    console.log(`${reversedInput}\n${asciiValue}`);
    
    
}

solve("a", "b", "c");