// Write a function that takes a number as an input.
// Have it create an empty array and then push a string into the array as many
// times as the input number
//
// Name the function "finalFunction"
function finalFunction(num1) {
    var arr = [];
    for (i = 0; i < num1; i++) {
        arr.push('');

    }
    // console.log(arr);
    return arr;
}

finalFunction(5);