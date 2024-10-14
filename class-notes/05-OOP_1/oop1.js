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

// const Car = {
//     brand: "Mercedes",
//     model: "S500",
//     year: 2020,
//     isAutoGear: "True",
//     colors: ["Blue", "Black"],
//     engine: {
//         cylinderCount: 8,
//         hp:100
//     },
//     startEngine: function(){
//         return "engine started"
//     },
//     stopEngine: function(){
//         return "engine stopped"
//     },
//     detailFunction: function(){
//         return this.brand        
//     },
//     //! arrow function global scope'dur this i kullanmamız anlamsız kabul etmiyor boş obje döndürüyor
//     arrowMethod: () => {
//         return this
//     }
// }
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

// console.log(Car.detailFunction());
// console.log(Car.arrowMethod());

//? Array destructuring

const sampleArray = ["val1","val2","val3","val4","val5"]
// const v1 = sampleArray[0]
// const v2 = sampleArray[1]
// const v3 = sampleArray[2]
// const v4 = sampleArray.slice(2,3)

// console.log(v4);

const [v1, v2, ...vOthers] = sampleArray
// eşitliğin solunda olacak
console.log(vOthers);

// spread operator eşitliğin sağı
const newArray = ["valx",...sampleArray,"valy"]
console.log(newArray);

//? Obje Destructuring

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

// rest
// const {year, brand, model, ...others} = Car
// console.log(year, brand, model, others);
// console.log("******");
// console.log(Car);

const {year, brand: marka, model, ...others} = Car
console.log(year, marka, model, others);






