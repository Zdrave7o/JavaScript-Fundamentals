function calcPatients(input){
    let doctorCount = 7;
    let timeLine = Number(input[0]);

    let treatedPatients = 0;
    let untreatedPatiens = 0;

    for(let i = 1; i<=timeLine; i++){
        const dailyPatients = Number(input[i]);
        if(i % 3 ===0 && treatedPatients < untreatedPatiens){
            doctorCount++;
        }

        if(dailyPatients <= doctorCount){
            treatedPatients += dailyPatients;
        } else{
            treatedPatients += doctorCount;
            untreatedPatiens += dailyPatients - doctorCount;
        }

    }

    console.log(`Treated patients: ${treatedPatients}.\nUntreated patients: ${untreatedPatiens}.`)
}

calcPatients([3,
7,
7,
7

]
);