"use strict"

/* ---------------------------- */

// Aşağıdaki üç yöntemi de kullanabiliriz aynı oluyor
// require("./modules/index.js")
// require("./modules/index")
// require("./modules") // dosya ismi index olduğu için yazmamıza gerek kalmıyor
/* ---------------------------- */

// Bir fonksiyonu import etmeyi bu şekilde yapabiliriz

// const test = require("./modules")

// test()


/* ---------------------------- */

// const arrFunc = require('./modules/index') 

// arrFunc[0]()
// arrFunc[1]()
// arrFunc[2]()

/* ---------------------------- */

// const arrFunc = require('./modules/index')

// const [test1, test2, test3] = require('./modules/index')
// test1()
// test2()
// test3()

/* ---------------------------- */

// const objFunc = require('./modules/index')

// objFunc.test1()
// objFunc.test2()
// objFunc.test3()

/* ---------------------------- */

// const {test2, test1, test3} = require("./modules")
// const name = require("./modules") //! bir sayfada sadece bir tane module export edebiliyoruz

const {test2, test1, test3, name} = require("./modules")

test1()
test2()
test3()
console.log(name);


/* ---------------------------- */


console.log("this is module js");



