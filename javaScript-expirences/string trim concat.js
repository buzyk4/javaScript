function getUserInformation(name, surname, job) {
    name = name.toUpperCase().trim();
    surname = surname.toUpperCase().trim();
    job = job.toLowerCase().trim();

    let text = `imię: ${name}, nazwisko: ${surname}`;
    text = text.concat(`, zawód: ${job}`);
    
    return text;
}


let userInfo1 = getUserInformation("ania", "kowalska", "Programistka");
let userInfo2 = getUserInformation("Daniel", "Lis", "Administrator");

console.log(userInfo1);
console.log(userInfo2)