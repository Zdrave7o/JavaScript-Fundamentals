
function calculatePrice(season, groupType, studentCount, nights){
    let activity = "";
    let totalPrice = 0;
    if(season === "Winter"){
        if(groupType === "boys"){
            totalPrice = studentCount * nights * 9.60;
            activity = "Judo";
        } else if(groupType === "girls"){
            totalPrice = studentCount * nights * 9.60;
            activity = "Gymnastics";
        } else if(groupType === "mixed"){
            totalPrice = studentCount * nights * 10;
            activity = "Ski";
        }
    } else if(season === "Spring"){
        if(groupType === "boys"){
            totalPrice = studentCount * nights * 7.20;
            activity = "Tennis";
        } else if(groupType === "girls"){
            totalPrice = studentCount * nights * 7.20;
            activity = "Athletics";
        } else if(groupType === "mixed"){
            totalPrice = studentCount * nights * 9.50;
            activity = "Cycling";
        }
    } else if(season === "Summer"){
        if(groupType === "boys"){
            totalPrice = studentCount * nights * 15;
            activity = "Football";
        } else if(groupType === "girls"){
            totalPrice = studentCount * nights * 15;
            activity = "Volleyball";
        } else if(groupType === "mixed"){
            totalPrice = studentCount * nights * 20;
            activity = "Swimming";
        }
    }



    if(studentCount >= 50){
        totalPrice*=0.50;
    } else if(studentCount >= 20){
        totalPrice*=0.85;
    } else if(studentCount >= 10){
        totalPrice*=0.95;
    }

    console.log(`${activity} ${totalPrice.toFixed(2)} lv.`);
}

calculatePrice("Spring",
"girls",
20,
7
);