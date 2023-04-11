function getUserDescription(name, city, country) {

    let firstSign = name[0];
    let nameLength = name.length;
    let lastSign = name[name.length - 1]

    return `Użytkownik o imieniu ${name} mieszka w mieście ${city} w Państwie ${country}. 
    Pierwszy znak imienia to ${firstSign}, natomiast ostatni to ${lastSign}. 
    Imie ma ${nameLength} znaków`
};



const user1 = getUserDescription("Kasia", "Kraków", "Polska");
const user2 = getUserDescription("Adam", "Londyn", "UK");

console.log(user1)
console.log(user2)