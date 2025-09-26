function checkEquality(arr1, arr2){
    let isEqual = true;
    let sum = 0;
    for(let i = 0; i < arr1.length; i++){
        if(Number(arr1[i]) !== Number(arr2[i])){
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            isEqual = false;
            break;
        } else{
            sum += Number(arr1[i]);
        }
    }

    if(isEqual === true){
        console.log(`Arrays are identical. Sum: ${sum}`);
        
    }
}

checkEquality(['1'], ['10']);