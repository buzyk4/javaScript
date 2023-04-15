function generateNumArray(arrLength) {
    let arr = [];

    for (let i = 0; i < arrLength; i++) {
        arr.push(i);
    }
    return arr;
}

const numArr = generateNumArray(12);
console.log(numArr);

console.log(numArr.pop());
console.log(numArr.pop());
console.log(numArr.pop());
console.log(numArr)