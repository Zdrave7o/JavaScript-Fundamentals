function nextDate(year, month, day){
    let d = new Date(year, month - 1, day);
    d.setDate(d.getDate() + 1);

    let nextYear = d.getFullYear();
    let nextMonth = d.getMonth();
    let nextDay = d.getDate();
    
    console.log(`${nextYear}-${nextMonth + 1}-${nextDay}`);
    
}

nextDate(2020, 3, 24);