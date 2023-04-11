function validateEmail(email) {
    monkeyIndex = email.indexOf("@");
    dotIndex = email.indexOf(".", monkeyIndex)

    if(monkeyIndex > -1) {
        if(dotIndex > monkeyIndex)
        {
            return console.log(`for: ${email} -`, "monkey index: ", monkeyIndex, "dot index: ", dotIndex)
        }
        else return console.log(`for ${email} -`, "email error/use (.)")
    }
    else {
        return console.log(`for ${email} -`, "email error/use (@)")
    }
    
}

emailAddress = validateEmail("asia@exsample.com");
emailAddress2 = validateEmail("karol@domena");
emailAddress3 = validateEmail("user.com")
emailAddress4 = validateEmail(".u@ser.com")