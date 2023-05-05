let computer = {
    totalPrice: 0,
    type: "PC",
    parts: [
        {
            type: "obudowa",
            name: "NZXT",
            price: 700
        },
        {
            type: "procesor",
            name: "ryzen 5600X",
            price: 900
        },
        {
            type: "karta graficzna",
            name: "RTX 3060 TI",
            price: 3600
        },
        {
            type: "płyta główna",
            name: "ASRock",
            price: 700
        }
    ],

    calculatePrice: function() {
        let totalPrice = 0;

        for(let i = 0; i < this.parts.length; i++) {
            const part = this.parts[i];
            totalPrice += part.price;
        };

        this.totalPrice = totalPrice
    }
};

computer.calculatePrice();

console.log(computer.totalPrice)