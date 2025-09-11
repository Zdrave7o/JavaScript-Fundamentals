function login(input){
    let user = String(input[0]);
    let password = "";
    for(let i = user.length - 1; i>=0; i-- ){
        password += String(user[i]);
    }
    let attempts = 1;
    let loginInput = "";

    for(let i = 1; i < input.length; i++){
        loginInput = input[i];

        if(loginInput !== password){

            if(attempts >= 4){
                console.log(`User ${user} blocked!`);
            break;
            } else{
                console.log(`Incorrect password. Try again.`);
            }
        } else{
            console.log(`User ${user} logged in.`);
        }

        attempts++;
    }
}   

login(['sunny','rainy','cloudy','sunny','noT sunny']);