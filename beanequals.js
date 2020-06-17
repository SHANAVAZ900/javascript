function deepEqual(a, b) {
    if (a === b) {
        // items are identical
        return true;
    } else if (
        typeof a === "object" &&
        a !== null &&
        typeof b === "object" &&
        b !== null
    ) {

        let keys = Object.keys(a).concat(Object.keys(b));
        // To find out duplicate keys with help of filter
        keys = keys.filter(function (value, index, self) {
            return self.indexOf(value) === index;
        });
        for (p of keys) {
            if (typeof a[p] === "object" && typeof b[p] === "object") {
                if (deepEqual(a[p], b[p]) === false) {
                    return false;
                }
            } else if (a[p] !== b[p]) {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}

//Required Test Cases
var obj = {
    name: {
        SHAN: "shanavaz"
    },
    object: 77
};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {
    name: {
        SHAN: "shanavaz"
    },
    object: 77
}));
console.log(deepEqual(obj, {
    name: {
        S: "shanavaz"
    },
    object: 77
}));
console.log(deepEqual(obj, {
    name: {
        SHAN: "sha"
    },
    object: 77
}));
console.log(deepEqual(obj, {
    name: {
        SHAN: "shanavaz"
    },
    object: 77
}));