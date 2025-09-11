function printLastDigit(n) {
    n = Number(n);
    const words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let lastDigit = Number(String(n)[String(n).length - 1]);
    let word = words[lastDigit];

    return word;

}

console.log(printLastDigit(1643));