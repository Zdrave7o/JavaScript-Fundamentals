function lowerOrUpper(str){
    str = String(str);
    /[A-Z]/.test(str)? console.log(`upper-case`):console.log(`lower-case`);
}

lowerOrUpper("A")