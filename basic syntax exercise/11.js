function calcBtc(shifts){
    let btcPrice = 11949.16;
    let goldPrice = 67.51;
    let dayCount = 1;
    let balance = 0;
    let firstPurchase = 0;
    let isPurchased = false;
    let btcCount = 0;

    for(let i = 0; i< shifts.length; i++){
        const grams = shifts[i];

        if(dayCount % 3 === 0){
            balance += grams*0.70*goldPrice;
        } else{
            balance += grams*goldPrice;
        }

        if(isPurchased == false && balance >= btcPrice){
            isPurchased = true;
            firstPurchase = dayCount;
        }

        if(balance >= btcPrice){
            let bitcoins = Math.floor(balance/btcPrice);
            balance -= bitcoins*btcPrice;
            btcCount+=bitcoins;
        }

        dayCount++;
    }

    console.log(`Bought bitcoins: ${btcCount}`);
    if(isPurchased === true){
        console.log(`Day of the first purchased bitcoin: ${firstPurchase}`);
        
    }
    console.log(`Left money: ${balance.toFixed(2)} lv.`);
    
}

calcBtc([100, 200, 300]);