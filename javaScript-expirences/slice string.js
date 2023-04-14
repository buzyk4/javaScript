function getEmailParts(email) {
    let monkeyIndex = email.indexOf("@");
    if(monkeyIndex < 0) return null;

    let dotIndex = email.indexOf(".", monkeyIndex);
    if(dotIndex < monkeyIndex) return null


    let user = email.slice(0, monkeyIndex);
    let domainName = email.slice(monkeyIndex + 1, dotIndex);
    let domainExt = email.slice(dotIndex + 1);

    return `user: ${user}, domain name: ${domainName}, domain ext: ${domainExt}`
}

console.log(getEmailParts("ola@domena.com"))