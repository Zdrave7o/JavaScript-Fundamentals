function calcCone(r, h){
    let v = Math.PI * r*r * h/3;
    let l = Math.sqrt(r*r + h*h);
    let area = Math.PI*r*(r+l);

    console.log(`volume = ${v.toFixed(4)}\narea = ${area.toFixed(4)}`);
}

calcCone(3, 5)