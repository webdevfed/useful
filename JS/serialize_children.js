const flatten_serialize_children = (input) => {
    if (!(input instanceof Object)) return input
    else {
        if (input instanceof Array) {
            for (let index = 0; index <input.length; index++){
                if (input[index] instanceof Object) input[index] = flatten_serialize_children(input[index]);
            }
        }
        else {
            for (let prop in input) {
                if (input[prop] instanceof Object) input[prop] = flatten_serialize_children(input[prop])
            }
        }

       return JSON.stringify(input);
    }
}
