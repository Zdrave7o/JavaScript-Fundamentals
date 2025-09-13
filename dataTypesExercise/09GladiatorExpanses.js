// helmet, sword, shield, and armor

function calucateExpanses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice){
    let totalExpanses = 0;
    let shieldBrakes = 0;
    for(let i = 1; i <= lostFights; i++){
        let brokenHelmet = false;
        let brokenSword = false;

        if(i%2===0){
            brokenHelmet = true;
            totalExpanses+=helmetPrice;
        }

        if(i%3===0){
            brokenSword = true;
            totalExpanses+=swordPrice;
        }

        if(brokenSword===true && brokenHelmet ===true){
            totalExpanses+=shieldPrice;
            shieldBrakes++;
            if(shieldBrakes===2){
                shieldBrakes = 0;
                totalExpanses+=armorPrice;
            }
        }
    }

    console.log(`Gladiator expenses: ${totalExpanses.toFixed(2)} aureus`);
    
}

calucateExpanses(23,

12.50,

21.50,

40,

200);