function merge(arr1, arr2){
    let mergedArr = [];
    for(let i = 0; i< arr1.length; i++){
        mergedArr[i] = i % 2 === 0? Number(arr1[i]) + Number(arr2[i]):Number(`${arr1[i]}${arr2[i]}`); 
    }

    console.log(mergedArr.join(" - "));
    
}

merge(['13', '12312', '5', '77', '4'],

['22', '333', '5', '122', '44']);