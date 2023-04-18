let user = {
    email: "ania@test.com",
    memberShipCost: 100,
    numMemberShipYears: 3,
    numberOfPosts: 40
};

function extendMemberShip(user) {
    let memberShipDiscountFlag = 
        (user.numMemberShipYears >= 2) ? true : false;
    let minPostsFlag = user.numberOfPosts >= 30 ? true : false;
    
    if (memberShipDiscountFlag && minPostsFlag) {
        user.memberShipCost *= 0.6;
        console.log(user.email, "klasyfikuje się do promocji", user.memberShipCost);
    }
    else {
        console.log(user.email, "nie klasyfikuje sie do promocji", user.memberShipCost)
    }
}


extendMemberShip(user);