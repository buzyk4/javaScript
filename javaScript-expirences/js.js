function test(str, obj) {
    str = "Arek";
    obj.data = 99;
};

var someText = "Ania";
var someObj = {data: 10};

test(someText, someObj);

console.log("someText:" + someText);
console.log("someObj:" + someObj)