function checkElements(arr1, arr2){
    for(let el of arr1){
        if(arr2.includes(el)){
            console.log(el);
            
        }
    }
}

checkElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],

['s', 'o', 'c', 'i', 'a', 'l']);