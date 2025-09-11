function solve(word, char, fullWord){
    let res = word.replace("_", char);
    let output = res === fullWord? "Matched":"Not Matched";

    return output;
}

console.log(solve('Str_ng', 'I',

'String'));
