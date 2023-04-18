function recruitProgramer(email, level, yearsExp, languages) {
    if(level != "mid") {
        console.log("nie jest midem")
        return false
    };

    let jsExp = false;
    let tsExp = false;
    if(languages.indexOf("JavaScript") >= 0) jsExp = true;
    if(languages.indexOf("TypeScript") >= 0) tsExp = true;

    if(jsExp == true || tsExp == true) {
        if(yearsExp >= 1 && yearsExp < 6) {
            console.log(email, "spełnia wszystkie wymagania")
        }
    }
    return false
}

recruitProgramer("ania@test.com", "mid", 4, ["JavaScript", "TypeScript"])