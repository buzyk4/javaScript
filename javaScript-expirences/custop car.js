function makeCar(model, color, topSpeed) {

    return {
        model: model,
        color: color,
        topSpeed: topSpeed,
        manufacturer: {
            name: "Dodge",
            country: "USA"
        }
    };
};

let car1 = makeCar("Viper", "blue", 290);
console.log(car1);

let car2 = makeCar("Ram", "red", 240);
console.log(car2)