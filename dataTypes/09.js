function specialNumbers(n){

    for(let i = 1; i<=n; i++){
        let str = i.toString();
        let sum = 0;
        for(let j = 0; j < str.length; j++){
            sum+=Number(str[j]);
        }

        switch(sum){
            case 5:
            case 7:
            case 11:
                console.log(`${i} -> True`);
            break;
            default:
                console.log(`${i} -> False`);
                
        }
        
    }
}

specialNumbers(15)