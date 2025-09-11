function calcPrice(day, age) {
    day = String(day);
    age = Number(age);
    let isError = false;
    let price = 0;
    switch (day) {
        case "Weekday":
            if(age < 0 || age > 122){
                isError = true;
            }
            else if (age <= 18) {
                price = 12;
            } else if (age <= 64) {
                price = 18;
            } else if (age <= 122) {
                price = 12;
            }
            break;
        case "Weekend":
            if(age < 0 || age > 122){
                isError = true;
            }
            else if (age <= 18) {
                price = 15;
            } else if (age <= 64) {
                price = 20;
            } else if (age <= 122) {
                price = 15;
            }
            break;

        case "Holiday":
            if(age < 0 || age > 122){
                isError = true;
            }
            else if (age <= 18) {
                price = 5;
            } else if (age <= 64) {
                price = 12;
            } else if (age <= 122) {
                price = 10;
            }
            break;
    }

    if (isError === false) {
        console.log(`${price}$`);
    } else {
        console.log("Error!");
    }
}

calcPrice("Weekday", 0);