
let resultC = 0
let resultF = 0

function cToF(C) {
    resultC = C * 9 / 5 + 32;
    return resultC;
}

function fToC(F) {
    resultF = (F - 32) * 5 / 9;
    return resultF;
}

cToF(20);
fToC(86);

console.log(resultC);
console.log(resultF)
