function calcWeightAndPrice(input){
    const deliveryCount = Number(input[0]);
    let totalTones = 0;
    let totalPrice = 0;
    
    let busTones = 0;
    let truckTones = 0;
    let trainTones = 0;

    let busTotalPrice = 0;
    let truckTotalPrice = 0;
    let trainTotalPrice = 0;

    for(let i = 1; i<=deliveryCount; i++){
        const tones = Number(input[i]);
        totalTones+=tones;
        if(tones <= 3){
            busTones+=tones;

            busTotalPrice+= 200*tones;
        } else if(tones <= 11){
            truckTones+=tones;
            truckTotalPrice+=175*tones;
        } else{
            trainTones+=tones;
            trainTotalPrice+=120*tones;
        }
    }

    totalPrice = trainTotalPrice+truckTotalPrice+busTotalPrice;

    let avgPrice = totalPrice / totalTones;

    console.log(`${avgPrice.toFixed(2)}\n${((busTones / totalTones)*100).toFixed(2)}%\n${((truckTones / totalTones)*100).toFixed(2)}%\n${((trainTones / totalTones)*100).toFixed(2)}%`);
    
}

calcWeightAndPrice(["5",
"2",
"10",
"20",
"1",
"7"]);
