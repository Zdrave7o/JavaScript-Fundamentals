function calc(num, type, day){
    num = Number(num);
    type = String(type);
    day = String(day);

    let sum = 0;
    if(day === "Friday"){
        if(type === "Students"){
            sum = 8.45*num;
            if(num>=30){
                sum*=0.85;
            }
        } else if(type === "Business"){
            sum = 10.90*num;
            if(num>=100){
                sum-=10.90*10;
            }
        } else if(type === "Regular"){
            sum = 15*num;
            if(num>=10 && num <=20){
                sum*=0.95;
            }
        }
    } else if(day === "Saturday"){
        if(type === "Students"){
            sum = 9.80*num;
            if(num>=30){
                sum*=0.85;
            }
        } else if(type === "Business"){
            sum = 15.60*num;
            if(num>=100){
                sum-=15.60*10;
            }
        } else if(type === "Regular"){
            sum = 20*num;
            if(num>=10 && num <=20){
                sum*=0.95;
            }
        }
    } else if(day === "Sunday"){
        if(type === "Students"){
            sum = 10.46*num;
            if(num>=30){
                sum*=0.85;
            }
        } else if(type === "Business"){
            sum = 16*num;
            if(num>=100){
                sum-=16*10;
            }
        } else if(type === "Regular"){
            sum = 22.50*num;
            if(num>=10 && num <=20){
                sum*=0.95;
            }
        }
    }

    let message = `Total price: ${sum.toFixed(2)}`;
    return message
    
}

console.log(calc(40,

"Regular",

"Saturday"));