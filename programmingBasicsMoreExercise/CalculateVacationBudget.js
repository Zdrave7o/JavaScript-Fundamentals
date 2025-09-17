function calculateBudget(budget, season){
    let accomodation = "";
    let location = "";
    let totalPrice = 0;

    if(budget <= 1000){
        accomodation = "Camp";
    } else if(budget <= 3000){
        accomodation = "Hut";
    } else if(budget>3000){
        accomodation = "Hotel";
    }

    if(accomodation === "Camp"){
        if(season ==="Winter"){
            totalPrice = budget * 0.45;
            location = "Morocco";
        } else if(season === "Summer"){
            totalPrice = budget * 0.65;
            location = "Alaska";
        }
    } else if(accomodation === "Hut"){
        if(season ==="Winter"){
            totalPrice = budget * 0.60;
            location = "Morocco";
        } else if(season === "Summer"){
            totalPrice = budget * 0.80;
            location = "Alaska";
        }
    } else if(accomodation === "Hotel"){
        if(season ==="Winter"){
            location = "Morocco";
        } else if(season === "Summer"){
            location = "Alaska";
        }

        totalPrice = budget * 0.90;
    }


    console.log(`${location} - ${accomodation} - ${totalPrice.toFixed(2)}`);
    
}

calculateBudget(3460,
"Summer"


);
