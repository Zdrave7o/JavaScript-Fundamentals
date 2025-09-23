function calcMoney(totalMoney, finalYear){
    totalMoney = Number(totalMoney);
    finalYear = Number(finalYear);
    let age = 18;

    for(let year = 1800; year <= finalYear; year++){
        if(year % 2 === 0){
            totalMoney -= 12000;
        } else{
            totalMoney -= 12000 + 50 * age;
        }
        age++;
    }

    if(totalMoney >= 0){
        console.log(`Yes! He will live a carefree life and will have ${totalMoney.toFixed(2)} dollars left.`);
        
    } else{
        console.log(`He will need ${(totalMoney*-1).toFixed(2)} dollars to survive.`);
    }
}

calcMoney(50000,
1802
)