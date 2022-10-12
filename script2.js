//Creating class of Car Blueprint
class Car{

constructor(brand,type,model,mfg_year,topspeed){
    this.brand = brand;
    this.type = type;
    this.model  = model;
    this.mfg_year  = mfg_year;
    this.topspeed  = topspeed;

}

details(){
    return "<br>Brand of the car is " +"<strong>"+ this.brand+"</strong>"+ "<br>"+ "The design of the car is "+ this.type+ "<br>"+ "Modal of the car is "+ this.model + "<br>"+ "Manufacturing year of the car is "+ this.mfg_year+ "<br>"+
    "Top speed of the car is "+ this.topspeed+ "<br>" 
}

}

//Creating class of Bike Blueprint which is inherited from the Car Blueprint
class Bike extends Car{
    constructor(brand,gear,model,mfg_year,topspeed){
        super(brand)
        this.gear = gear;
        this.model  = model;
        this.mfg_year  = mfg_year;
        this.topspeed  = topspeed;
    }
    geartype(){

        //making use of methods from the Car(parent) class
        return this.details() +"No of gear(s) this bike has is " + this.gear + "<br>";
    }
    
}

//creating two objects for car
let car1 = new Car ("Jaguar","sedan","f-type","2022","340 kmph");
let car2 = new Car ("Audi","SUV","Q7","2021","290 kmph");


//creating one object for bike
let bike1 = new Bike("Hero",4,"passion pro","2017","77");
 
document.write(car1.details());
console.log("The modal of the first car is "+ car1.model);

document.write(bike1.geartype());
console.log("The modal of the first bike is "+ bike1.model);
