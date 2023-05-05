function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.printInfo = function() {
        console.log("Auto:" + this.brand + " " + this.model + ", rocznik:" + this.year);
    }
}

var charger = new Car("Dodge", "Charger", 1973);
charger.printInfo()