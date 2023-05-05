let company = {
    name: "Buzyks Company",
    address: {
        city: "Rzeszów",
        street: "Strazacka"
    },
    employees: [],

    addEmployee: function(email, job, salary) {

        monkeyIndex = email.indexOf("@");

        if(typeof email === "string" && typeof job === "string" && monkeyIndex > -1 && salary >= 4000) {

            const employee = {
                email: email,
                job: job,
                salary: salary,
                getInfo: function() {
                    return this.email + "-" + this.job, "zarobki - " + this.salary
                }
            };

            this.employees.push(employee)
            return true
        }
        else return false
    },

    showEmployees: function() {
        console.log("pracownicy firmy", this.name);

        for (let i = 0; i < this.employees.length; i++) {
            const e = this.employees[i];
            
            console.log(e.getInfo())
        }
    },

    
};

company.addEmployee("xyz@xyz.com", "tester", 6000);
company.showEmployees()