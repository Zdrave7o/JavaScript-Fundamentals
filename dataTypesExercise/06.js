function reverse(str){
    str=String(str);
    str = str.split('').reverse().join("");

    console.log(str);
    
}

reverse("hello")