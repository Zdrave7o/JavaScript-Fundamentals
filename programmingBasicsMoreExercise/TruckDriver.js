function calculatePayCheck(season, kmPerMonth){
    let payCheck = 0;
    if(kmPerMonth > 10000 && kmPerMonth <= 20000){
        payCheck = 1.45*kmPerMonth;
    }

    if(season === "Autumn" || season === "Spring"){
        if(kmPerMonth <= 5000){
            payCheck = 0.75*kmPerMonth;
        } else if(kmPerMonth <= 10000){
            payCheck = 0.95*kmPerMonth;
        }
    } else if(season === "Summer"){
        if(kmPerMonth <= 5000){
            payCheck = 0.90 * kmPerMonth;
        } else if(kmPerMonth <= 10000){
            payCheck = 1.10 * kmPerMonth;
        }
    } else if(season === "Winter"){
        if(kmPerMonth <= 5000){
            payCheck = 1.05 * kmPerMonth;
        } else if(kmPerMonth <= 10000){
            payCheck = 1.25 * kmPerMonth;
        }
    }

    payCheck*=4;
    payCheck*=0.90;

    return payCheck.toFixed(2);
}

console.log(calculatePayCheck("Summer",
3455
));

console.log(calculatePayCheck("Winter",
4350
));
console.log(calculatePayCheck("Spring",
16942
));
