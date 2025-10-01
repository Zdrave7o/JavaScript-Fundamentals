function findSequenceOfEqualNumbers(arr){
    let currentNum = arr[0]
    let currentLength = 1;

    let bestNum = arr[0];
    let bestLength = 1;

    for(let i = 1; i< arr.length; i++){
        if(arr[i] === currentNum){
            currentLength++;
        } else{
            currentNum = arr[i];
            currentLength = 1;
        }

        if(currentLength > bestLength){
            bestNum = currentNum;
            bestLength = currentLength;
        }
    }
    
    console.log(Array(bestLength).fill(bestNum).join(" "));
}

findSequenceOfEqualNumbers([1, 1, 1, 2, 3, 1, 3, 3]);