function convert(m){
    m = Number(m);
    let km = m / 1000; //1km = 1000m
    let miles = km * 0.62137; //1km = 0.62137 miles

    console.log(`${m} meters is equal to ${km} kilometers. \n${km} kilometers is equal to ${miles.toFixed(2)} miles.`);
}

convert(798);