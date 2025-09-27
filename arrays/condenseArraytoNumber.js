function condense(arr){
    if(arr.length > 1){
        while(arr.length > 1){
        let condensedArr = [];
        for(let i = 0; i<arr.length; i++){
            if(i + 1 > arr.length - 1){
                break;
            }
            condensedArr[i] = arr[i] + arr[i + 1];
        }
        arr = condensedArr;
    }

    console.log(arr.reduce((acc, curr) => acc + curr, 0));

    } else{
        console.log(`${arr[0]} is already condensed to number`);
        
    }
    
}

condense([1]);