function calculateSpiceYield(yield){
    let operatingDays = 0;
    let totalSpice = 0;
    while(yield >= 100){
        totalSpice+= yield - 26;
        operatingDays++;

        yield-=10;
        
        if(yield < 100){
            totalSpice-=26;
            break;
        }
    }

    console.log(`${operatingDays}\n${totalSpice}`);
    
}

calculateSpiceYield(111);