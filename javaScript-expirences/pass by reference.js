let employee = {
    name: "Arkadiusz",
    email: "buzyk99@gmail.com",
    rank: "programer",
    salary: 8000
}

function promoteToManager(user) {
    if( user.rank === "manager") {
        return console.log("user is a manager already");
    }
    else {
        user.salary = user.salary + (0.5 * user.salary);
        user.rank = "manager";
    }return console.log(user)
}

promoteToManager(employee)