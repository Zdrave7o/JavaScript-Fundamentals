function play(input){
    let health = 100;
    let coins = 0;

    const rooms = [];
    let length = input.length;
    let n = 0;
    while (n < length){
        let index = input.indexOf("|");

        if(input.includes("|")){
            let currentLevel = input.slice(0, index);
            input = input.slice(index + 1);
            length = input.length;
            rooms.push(currentLevel);
        } else {
            rooms.push(input);
            break;
        }
    }

    let roomCount = 1;
    let playerAlive = true;

    for(let room of rooms){
        let currentObject = room.slice(0, room.indexOf(" "));
        let currentObjValue = Number(room.slice(room.indexOf(" ")));
        if (currentObject === "potion") {
            if (health + currentObjValue > 100) {
                console.log(`You healed for ${100 - health} hp.`)
                health = 100;

            } else{
                console.log(`You healed for ${currentObjValue} hp.`);
                health+=currentObjValue;
            }

            console.log(`current Health: ${health} hp.`);
            
        } else if (currentObject === "chest") {
            console.log(`You found ${currentObjValue} coins.`);
            
            coins += currentObjValue;
        } else {
            health -= currentObjValue;
            if (health <= 0) {
                console.log(`You died! Killed by ${currentObject}`);
                playerAlive = false;
                break;
            } else {
                console.log(`You slayed ${currentObject}.`);
            }
        }

        roomCount++;
    }
    
    if(playerAlive === true){
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
        
        

    } else{
        console.log(`Best room: ${roomCount}`);

    }
    
}

play("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");