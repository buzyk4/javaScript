function changeArr(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        const v = arr[i];
        const result = callback(v);
        console.log(result)
    }
}
let array = [1,2,3,4,5,6];

console.log(changeArr(array, function(num) {
    return num * 2
}));