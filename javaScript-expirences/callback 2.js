function filterArr(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        const v = arr[i];
        const result = callback(v);
        if (result) console.log(v)
    };
};

let nameCheck = function(name) {
    if(name.length > 3) {
        return true;
    }
    else {
        return false;
    }
};
let names = ["Ania", "Kasia", "Ola", "Daniel"];
let numbers = [10,20,30,40,50];

filterArr(names, nameCheck);
filterArr(numbers, function(num) {
    if (num < 35) {
        return true;
    }
    else {
        return false;
    }
})




