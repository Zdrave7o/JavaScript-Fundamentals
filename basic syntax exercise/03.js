
function checkDevisible(n){
    n = Number(n);
    let devisibles = [2, 3, 6, 7, 10];
    let message = "";
    let isDivisible = false;
    for(let i = 0; i<devisibles.length; i++){
        if(n % devisibles[i] === 0){
            message = (`The number is divisible by ${devisibles[i]}`);
            isDivisible = true;
        }
    }

    if(isDivisible === false){
        message = "Not divisible";
    }

    console.log(message);
    
}

checkDevisible(11);