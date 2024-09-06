// add whatever parameters you deem necessary
function twoArrayObject(keys, vals) {
    let obj = {};
    let key, val;

    // shift elements out of the array and add them into an object
    while (keys.length && vals.length) {
        key = keys.shift();
        val = vals.shift();
        obj[key] = val;
    }
    // if there are still keys, set values to null.
    if (keys.length) {
        key = keys.shift();
        obj[key] = null;
    }
    return obj;
}

console.log(twoArrayObject(['a', 'b', 'c', 'd'], [1, 2, 3])) // {'a': 1, 'b': 2, 'c': 3, 'd': null}
console.log(twoArrayObject(['a', 'b', 'c'], [1, 2, 3, 4])) // {'a': 1, 'b': 2, 'c': 3}
console.log(twoArrayObject(['x', 'y', 'z'], [1, 2])) // {'x': 1, 'y': 2, 'z': null}
