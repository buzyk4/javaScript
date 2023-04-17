let soldCars = 1200;
let carPrice = 90000;

let revenue = soldCars * carPrice;
let factoryCosts = revenue * 0.65;
let marketingCosts = revenue * 0.1;
let income = revenue - (factoryCosts + marketingCosts);

let incomeTax = income * 0.19;
let incomeAfterTax = income - incomeTax;
let actionIncome = incomeAfterTax / 30000;

const table = {
    "przychód": revenue,
    "koszty produkcji": factoryCosts,
    "koszty marketingu": marketingCosts,
    "dochód": income,
    "podatek dochodowy": incomeTax,
    "dochód po podatkach": incomeAfterTax,
    "zysk na akcje": actionIncome 
};
console.log(table)