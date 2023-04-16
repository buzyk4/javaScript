function createSchoolGroup(groupLetter, numGroups) {
    let group = [];

    for (let i = 1; i <= numGroups; i++) {
        group.push(i + groupLetter);
        
    };
    return group;
};

const result1 = createSchoolGroup("a", 3);
console.log(result1);

const result2 = createSchoolGroup("b", 6);
console.log(result2);

const result3 = createSchoolGroup("c", 8);
console.log(result3);

let fullGroup = result1.concat(result2, result3);
console.log(fullGroup)