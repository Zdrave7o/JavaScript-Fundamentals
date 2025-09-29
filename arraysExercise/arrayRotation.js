function rotate(arr, rotationsCount){
    for(let rotation = 1; rotation <= rotationsCount; rotation++){
        let lastEl = arr.shift();
        arr.push(lastEl);
    }

    console.log(arr.join(' '));
    
}

rotate([51, 47, 32, 61, 21], 2);