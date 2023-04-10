const company = {
    nazwa: "Example Ltd",
    ulica: "Wilcza",
    miasto: "Warszawa",
    employees: []
}
function addEmployee(name, email, job) {
        const employee = {
            userName: name,
            userEmail: email,
            userJob: job 
        }

    company.employees.push(employee);
}

addEmployee("Arkadiusz", "buzyk99@gmail.com", "Developer");
addEmployee("Klaudia", "klaudia@gmail.com", "photographer");
addEmployee("Andrzej", "andrzej@gmail.com", "manager")

console.log(company)