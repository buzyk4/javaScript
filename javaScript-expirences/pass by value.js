function increaseSalary(money, bonus) {
    let newSalary = money + (0.2 * money)
    return newSalary + bonus
}
let salary = 5000

console.log("new salary: " + increaseSalary(5000, 1000), "salary: " + salary)