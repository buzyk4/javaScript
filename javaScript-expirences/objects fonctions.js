function generateUser(name, email, city, job) {

    return {
        username: name,
        email: email,
        city: city,
        job: job
    };
};

let user1 = generateUser("Arkadiusz", "buzyk99@gmail.com", "Rzeszów", "Frontend Developer");
console.log(user1);

let user2 = generateUser("Klaudia", "klaudia@gmail.com", "Rzeszów", "photographer");
console.log(user2);