function Person(name,age,sex){
this.Name=name;
this.Age=age;
this.Sex=sex;
}

let kar = new Person("karthik",24,"male");
console.log(kar.Name);




class Car {
  constructor(brand,country) {
    this.carname = brand;
    this.country = country;
  }

   DisplayNaA(){
    console.log("Name is "+this.carname + "  Country is "+ this.country);
  };


  present() {
    return "I have a " + this.carname;
  }
}

let val = new Car("KIA","jap");
val.DisplayNaA();
