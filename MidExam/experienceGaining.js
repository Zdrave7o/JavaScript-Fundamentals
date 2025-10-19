function calculateExperience(input){
    const xpNeeded = input[0];
    const battles = input[1];
    const xpEntries = input.slice(2, input.length);
    
    let battleCount = 0;

    function sumExp(){
        let xp = 0;
        for(let i = 0; i < xpEntries.length; i++){
            battleCount++;
            const xpEntry = xpEntries[i];
            if(xp >= xpNeeded){
                return xp;
            }

            if(battleCount % 3 === 0){
                xp+= xpEntry*1.15;
            } else if(battleCount % 5 === 0){
                xp+= xpEntry*0.90;
            } else if(battleCount % 15 === 0){
                xp+= xpEntry*1.05;
            } else{
                xp+= xpEntry;
            }

        }

        return xp;
    }

    let totalXp = sumExp();
    
    if(totalXp >= xpNeeded){
        console.log(`Player successfully collected his needed experience for ${battleCount} battles.`);
    }
    
}

calculateExperience([500,
5,
50,
100,
200,
100,
30
])