function print(str){
    let n = Number(str);
    let letters = "";
    for(let i = 0; i<n; i++){
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                 letters += String.fromCharCode(97 + i) + String.fromCharCode(97 + j) + String.fromCharCode(97 + k) + "\n";
            }
        }

    }

    console.log(letters);
    
}

print("3");