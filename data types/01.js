function printType(p){
    console.log(typeof(p));
    if(typeof(p) !== "string" && typeof(p) !== "number"){
        console.log("Parameter is not suitable for printing");
    } else{
        console.log(p);
        
    }
}

printType(null);