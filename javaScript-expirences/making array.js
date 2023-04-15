let array = [1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < array.length; i++) {
    const number = array[i];
    array[i] = number * 2
    console.log(array[i])
}