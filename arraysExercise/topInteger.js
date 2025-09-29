function findTopIntegers(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let isTop = true;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] <= arr[j]) {
                isTop = false;
                break;
            }
        }
        if (isTop) {
            result.push(arr[i]);
        }
    }
    console.log(result.join(' '));
}

findTopIntegers([27, 19, 42, 2, 13, 45, 48]);