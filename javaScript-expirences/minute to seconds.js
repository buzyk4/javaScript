
function convertToSeconds(hours, minutes) {
    return minutes * 60 + (hours * 3600);
};

function convertToHours(minutes) {
    return minutes / 60
};

console.log(convertToSeconds(3, 25))
console.log(convertToHours(120))
