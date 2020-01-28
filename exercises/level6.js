function lvl6exercise1(num) {
    // Return 'hello' if num is 1, 'world' if num is 2, otherwise return 'bye'
    // var num = 2;
    if (num == 1) {
        console.log('hello');
        return "hello";

    } else if (num == 2) {
        console.log('world');
        return "world";
    } else {
        console.log('bye');
        return "bye";
    }
}
lvl6exercise1(2);

function lvl6exercise2() {
    // Push 10 'hello' strings into the array using a for loop, then return it
    var arr = []
    for (i = 0; i < 10; i++) {
        arr.push('hello');
    }
    console.log(arr);
}
lvl6exercise2();

function lvl6exercise3() {
    // Empty this array using a while loop and return it
    var arr = ['hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello']
    while (arr.length) {
        arr.pop();
        //arr.splice(0, 3)

        // }
        return arr;
    }
}
console.log(lvl6exercise3());