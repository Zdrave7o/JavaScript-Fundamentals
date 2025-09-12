function info(town, population, area){
    town = String(town);
    population = Number(population);
    area = Number(area);
    let isValid = false;
    let output = town.length < 3? "Town name must be at least 3 characters!" + "\n":"";
    output += population >= 0? "":"Population must be a positive number!" + "\n";
    output += area >= 0? "":"Area must be a positive number!";

    if(town.length >= 3 && population >= 0 && area >= 0) isValid = true;
   
    if(isValid === true){
        output = `Town ${town} has population of ${population} and area ${area} square km.`  
    }

    console.log(output);
    
}

info('Ka',

3600,

-50);