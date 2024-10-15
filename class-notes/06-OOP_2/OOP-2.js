"use strict"

//! OOP Classes

//? Class Expression
// const PascalCaseName = class{
//     ...
// }

//? Class Decleration (tercih edeceğimiz)
/*
class PascalCaseName {
    // propertyName //değervermek zorunlu değil, undefined
    propertyName="value"

    // method başına function yazılmaz
    methodName() {
    return "this is method"
   }
}
// instance (class'tan obje(nesne) ürettiğimizde kullandığımız terim)

const NewInstance = new PascalCaseName() // yeni instace üretme
console.log(NewInstance);
console.log(NewInstance.methodName());
*/
//* CONSTRUCTOR
class Car{
    isRunning = false
    // brand="noname"
    constructor(brand="noname", model, year=1900){
        this.brand = brand
        this.model = model
        this.year = year
    }
    runEngine(){
        this.isRunning = true
        return this.isRunning
    }
}

const Opel = new Car("Opel","Corsa",2020)
console.log(Opel);
console.log(Opel.runEngine());

const Mercedes = new Car("Mercedes","E200",2023)
console.log(Mercedes);
console.log(Mercedes.runEngine());

