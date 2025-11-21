function magicNum(arr, sum){
    let output = ``;
    for(let i = 0; i < arr.length; i++){
        let currentNum = arr[i];

        for (let j = i + 1; j < arr.length; j++) {
            if(currentNum + arr[j] === sum){
                if(!output.includes(`${currentNum} ${arr[j]}`) || !output.includes(`${arr[j]} ${currentNum}`)){
                    output+=`${currentNum} ${arr[j]} \n`;
                    break;
                }
            }   
        }
    }

    console.log(output);
    
}

magicNum([1, 1, 1, 1],

2)