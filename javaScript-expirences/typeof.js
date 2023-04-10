function createUser(name, contact) {
    
    let user = {
        username: name
    }

    if(typeof contact == "string") {
        user.email = contact
    }
    else if(typeof contact == "number") {
        user.phoneNumber = contact
    }
    console.log(user)
}

createUser("Ola", "ola@exsample.com")
createUser("Kasia", 123456789)

