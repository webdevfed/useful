const test_case = {
    a: 1,
    b: 2,
    c: {
        d: 3,
        e: 4,
        f: 0,
        g: {
            h: 8,
            i: 9
        }
    },
    n: [1, 2, {
        x: 0,
        y: "string",
        z: {
            a: 1
        }
    }]
}

const flat_test_case = (function(object) {

    for (let prop in object) {
        object[prop] = flatten_serialize_children(object[prop])
    }

    return object

})(test_case)
