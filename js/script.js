'use strict';

function demo() {
    /*
    for (var i = 0; i < 2; i++) {
        console.log('var ' + i); // step 0; step 1;
    }

    // Has global and functional scope.
    console.log(i); // 2
    */
    /*
    for (let i = 0; i < 2; i++) {
        console.log('let ' + i); // step 0; step 1;
    }
    // block scope, `i` lives inside a loop.
    console.log(i); //Error:  i is not defined.
    */
    /*
    for (let i = 0; i < 2; i++) {
        const param = 100;
        console.log('const ' + param); // step 100; step 100;
    }
    // block scope, `param` lives inside a loop.
    console.log('const ' + param); // //Error: param is not defined.
    */
}

//demo();
