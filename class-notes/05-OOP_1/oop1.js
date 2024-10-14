'use strict' // katı kuralları uygulamak için yazmak zorunda olduğumuz şey

/* 
OOP
*/
// obje isimlendirmede pascalCase / camelCase kullanılır
// const sampleObject = {
//     // property / attribute / field
//     propertyName: "value",
//     propertyArray: [],
//     propertyObject: {}, // obje içerisinde obje

//     // function = method
//     methodName: function(){
//         return "this is method"
//     },
//     // or 
//     methodName2 (){
//         return "this is method"
//     }
// }

// obje property çağırma

// console.log(sampleObject.propertyName);
// console.log(sampleObject.methodName());

// example object

const Car = {
    brand: "Mercedes",
    model: "S500",
    year: 2020,
    isAutoGear: "True",
    colors: ["Blue", "Black"],
    engine: {
        cylinderCount: 8,
        hp:100
    },
    startEngine: function(){
        return "engine started"
    },
    stopEngine: function(){
        return "engine stopped"
    },
    detailFunction: function(){
        return this.brand        
    },
    //! arrow function global scope'dur this i kullanmamız anlamsız kabul etmiyor boş obje döndürüyor
    arrowMethod: () => {
        return this
    }
}
// . dot notaion
// console.log(Car.brand);
// console.log(Car.colors);
// console.log(Car.colors[0]);
// console.log(Car.engine);
// console.log(Car.engine.cylinderCount);
// console.log(Car.startEngine());

// alternative

// console.log(Car["brand"]);
// console.log(Car["colors"][0]);
// console.log(Car["stopEngine"]());

//! This keyword
// içinde bulunduğu objeyi ifade eder

console.log(Car.detailFunction());
console.log(Car.arrowMethod());

