let article = {
    date: new Date(2030, 12, 01),
    title: "Hello World",
    content: "To moj pierwszy artykuł",
    tags: ["blog", "lifestyle"],
    version: 1
};

function validateArticle(art) {
    let result1 = ("title" in art == true && typeof art.title === "string" && "content" in art == true && typeof art.content === "string") ? true : false;
    let result2 = Array.isArray(art.tags) ? true : false;
    let result3 = (art.version > 0) ? true : false

    if(result1  && result2 && result3) {
        console.log("Tak")
    }
    else {
        console.log("Nie")
    }
}

validateArticle(article);