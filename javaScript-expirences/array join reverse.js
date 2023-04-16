let names = ["Arek", "Klaudia", "Weronika", "Sebastian", "Atos"];

function combineNames(arr, comma) {
   let reverse = arr.reverse();
   let sumNames = reverse.join(comma);
   console.log(sumNames)
   return sumNames;
};

let result = combineNames(names, "|");

let result1 = result.split("|");
console.log(result1)
