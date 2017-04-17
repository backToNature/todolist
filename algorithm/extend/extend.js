

var extend = function (obja, objb) {
    var key;
    for (key in objb) {
        if (typeof objb[key] === 'object') {
            obja[key] = {};
            extend(objb[key], obja[key]);
        } else {
            obja[key] = objb[key];
        }
    }
    return obja;
};

var a = {
    a: 1,
    b: 3,
    c: {
        a: 4
    },
    d: 5
};

var b = {
    a: 2,
    b: 3,
    c: {
        b: 3
    },
    d: 4
};

extend(a, b);
