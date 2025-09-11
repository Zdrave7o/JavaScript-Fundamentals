function age(age){
    age = Number(age);
    let message = "";
    if(age < 0){
        message = "out of bounds";
    } else if(age <= 2){
        message = "baby";
    } else if(age <= 13){
        message = "child";
    } else if(age <= 19){
        message = "teenager";
    } else if(age <=65){
        message = "adult";
    } else if(age >=66){
        message = "elder";
    }

    console.log(message);
    
}

age(100);