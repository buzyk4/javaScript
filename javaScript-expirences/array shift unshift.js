let cars = ["dodge", "chevy", "gmc", "pontiac", "acura", "toyota"];

let newCollection = cars.splice(0, 3, "sprzedane", "sprzedane", "sprzedane");

console.log(newCollection);
console.log(cars);

cars.splice(6, 0, "nissan", "porsche", "merc");
console.log(cars);

cars.unshift("gmc");
console.log(cars);