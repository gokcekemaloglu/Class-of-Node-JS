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
// class Car{
//     isRunning = false
//     // brand="noname"
//     constructor(brand="noname", model, year=1900){
//         this.brand = brand
//         this.model = model
//         this.year = year
//     }
//     runEngine(){
//         this.isRunning = true
//         return this.isRunning
//     }
// }

// const Opel = new Car("Opel","Corsa",2020)
// console.log(Opel);
// console.log(Opel.runEngine());

// const Mercedes = new Car("Mercedes","E200",2023)
// console.log(Mercedes);
// console.log(Mercedes.runEngine());

//? INHERİTANCE = Miras Alma
// Başka bir class'ın sahip oldukları herşeyi alıyor + kendi sahip oldukları

// class Vehicle{
//     isActive = false
//     seatCount=5
//     hp
//     constructor(vehicleType){
//         this.vehicleType = vehicleType
//     }
// }

// class Car extends Vehicle {
//     isRunning = false
//     // brand="noname"
//     constructor(brand="noname", model, year=1900, vehicleType){
//         super(vehicleType)
//         this.brand = brand
//         this.model = model
//         this.year = year
//     }
//     runEngine(){
//         this.isRunning = true
//         return this.isRunning
//     }
// }

// const Mercedes = new Car("Mercedes","E200",2023,"Car")
// console.log(Mercedes);
// console.log(Mercedes.runEngine());

// class Truck extends Vehicle {
//     isRunning = false
//     maxCapacity
//     // brand="noname"
//     constructor(brand="noname", model, year=1900, vehicleType){
//         super(vehicleType)
//         this.brand = brand
//         this.model = model
//         this.year = year
//     }
//     runEngine(){
//         this.isRunning = true
//         return this.isRunning
//     }
// }

// class Accessory extends Car {
//     constructor(accessoryName,brand, model, year, vehicleType) {
//         super(brand, model, year, vehicleType)
//         this.accessoryName = accessoryName
//     }
// }

// const Seat = new Accessory("Leader", "Audi", "Q8", 2000, "Car")
// console.log(Seat);

//? Polymorphism

// Override

// Overload ; js  desteklemiyor

// class Vehicle{
//     isActive = false
//     seatCount=5
//     hp
//     constructor(vehicleType){
//         this.vehicleType = vehicleType
//     }
//     getDetail(){
//         console.log("this detail about vehicle");        
//     }
// }
// const newVehicle = new Vehicle("Bus")
// console.log(newVehicle.getDetail());


// class Car extends Vehicle {
//     isRunning = false
//     // brand="noname"
//     constructor(brand="noname", model, year=1900, vehicleType){
//         super(vehicleType)
//         this.brand = brand
//         this.model = model
//         this.year = year
//     }
//     runEngine(){
//         this.isRunning = true
//         return this.isRunning
//     }
//     // Overload (fonksiyonların aşırı yüklenmesidir)
//     getDetail(){ //parent class'daki fonksiyon override edildi
//         console.log("this detail about car");
        
//     }
//     getDetail(x){ //parent class'daki fonksiyon override edildi
//         console.log(x);
        
//     }
// }

// const Mercedes = new Car("Mercedes","E200",2023,"Car")
// console.log(Mercedes.getDetail());
// console.log(Mercedes.getDetail("test"));

//? access modifier
//? Encapsulation 
//? PUBLIC       Parent=YES, Child=YES, Instance=YES
//? #PRIVATE     Parent=YES, Child=NO, Instance=NO
//? _PROTECTED   Parent=YES, Child=YES, Instance=NO

class Vehicle{
    publicProp= "this is public property"
    #privateProp= "this is PRIVATE property"
    _protectedProp= "this is PROTECTED property"
    isActive = false
    seatCount=5
    hp
    constructor(vehicleType){
        this.vehicleType = vehicleType
    }
    getDetail(){
        console.log(this.publicProp);        
        console.log(this.#privateProp);        
        console.log(this._protectedProp);        
    }
}
const newVehicle = new Vehicle("Bus")
console.log(newVehicle.getDetail());


class Car extends Vehicle {
    isRunning = false
    // brand="noname"
    constructor(brand="noname", model, year=1900, vehicleType){
        super(vehicleType)
        this.brand = brand
        this.model = model
        this.year = year
    }
    runEngine(){
        this.isRunning = true
        return this.isRunning
    }
    getDetail(){
        console.log(this.publicProp);        
        // console.log(this.#privateProp);        
        console.log(this._protectedProp);        
    }
}

const Mercedes = new Car("Mercedes","E200",2023,"Car")
console.log(Mercedes.publicProp);        
// console.log(Mercedes.#privateProp);
console.log(Mercedes._protectedProp); //! protected JS desteklemez; normalde bu satır hata vermeliydi

//! eğer bir property / variable _ ile başlıyorsa yani protected ise ona dokunma
//! eğer bir değişken tamamen büyük harflerden oluşuyorsa CONST yani sabittir silme/değiştirme
