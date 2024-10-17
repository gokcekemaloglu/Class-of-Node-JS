"use strict"

/* ---------------------------- */

// console.log("hey this is from module folder");

// function test() {
//     console.log("this is test function");
    
// }

// module.exports = test

/* ---------------------------- */

function test1() {
    console.log('this is test1 function');
}
function test2() {
    console.log('this is test2 function');
}
function test3() {
    console.log('this is test3 function');
}

const name = "Gokce"

/* ---------------------------- */

// module.exports = [test1, test2, test3]


/* ---------------------------- */

// module.exports = {test1:test1, test2, test3} // key value aynıysa js de yeni gelisme, value yazmak zorunda değisin aynı olduğundan
// module.exports = {test1, test2, test3}
// module.exports = name //! bir sayfada sadece bir tane module export edebiliyoruz

/* ---------------------------- */

module.exports = {test1, test2, test3, name} //! bir sayfada sadece bir tane module export edebiliyoruz

/* ---------------------------- */

/* ---------------------------- */


