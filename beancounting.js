function countBs(x) {
    var c = 0;
    for (let i = 0; i < x.length; i++) {
        if (x[i] === "B") {
            console.log(x[i]);
            c++;
        }
    }
    return c;
}

function countChar(newstring, character) {
    var c = 0;
    for (let i = 0; i < newstring.length; i++) {
        if (newstring[i] === character) {
            c++;
        }
    }
    return c;
}


console.log(countChar("shAn", "A"));