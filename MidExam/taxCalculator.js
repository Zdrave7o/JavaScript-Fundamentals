function calculateTax(inputStr){
    const validVehicleTypes = ["family", "heavyDuty", "sports"];
    const inputArr = inputStr[0].split(">>");
    let total = 0;

    let tax = 0;
    for(let i = 0; i < inputArr.length; i++){
        let currentInput = inputArr[i];
        const carType = currentInput.slice(0, currentInput.indexOf(" "));
        currentInput = currentInput.slice(currentInput.indexOf(" ") + 1, currentInput.length);

        const yearsInRent = Number(currentInput.slice(0, currentInput.indexOf(" "))); 
        
        currentInput = currentInput.slice(currentInput.indexOf(" "), currentInput.length);

        const kmTravelled = Number(currentInput);

        if (!validVehicleTypes.includes(carType)) {
            console.log("Invalid car type.");
            continue;
        } else{
            if(carType === "family"){
                tax = 50;
                tax-= 5 * yearsInRent;
                tax+=12*(Math.floor(kmTravelled/3000));  
            } else if(carType === "heavyDuty"){
                tax = 80;
                tax-= 8 * yearsInRent;
                tax+=14*(Math.floor(kmTravelled/9000));  
            } else if(carType === "sports"){
                tax = 100;
                tax-= 9 * yearsInRent;
                tax+=18*(Math.floor(kmTravelled/2000)); 
            }

            total+= tax;

            console.log(`A ${carType} car will pay ${tax.toFixed(2)} euros in taxes.`);
            
        }

       
        
    }

    console.log(`The National Revenue Agency will collect ${total.toFixed(2)} euros in taxes.`);
    
    
}

calculateTax([`family 5 3210>>pickUp 1 1345>>heavyDuty 7 21000>>sports 5 9410>>family 3 9012`]);