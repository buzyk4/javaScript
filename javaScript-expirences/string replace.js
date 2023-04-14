function cleanText(text) {
    text = text.replace(/php/gi, "***").replace(/JavaScript/gi, "**********");

    return text
}

let someText = `Programowanie zaczołem z językiem php, nastepnie poznałem: html i css, ale obecnie skupiam się na JavaScript i php`

let cleanedText = cleanText(someText)

console.log(cleanedText)