function reverse(inputArr){
    for(let i = 0; i< inputArr.length / 2; i++){
        swapElements(inputArr, i, inputArr.length - 1 - i);
    }

    function swapElements(arr, i, j){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    console.log(inputArr.join(" "));
    

}

reverse(['a', 'b', 'c', 'd', 'e']);
