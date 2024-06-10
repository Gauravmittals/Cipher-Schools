
// object literals


// let person={
//     firstName:"Gaurav",
//     lastName:"Mittal",

//     getFullName:function(){
//         return `The name of the person is ${person.firstName} ${person.lastName}`;
//     },

//     phoneNumber:{
//         mobile:12345,
//         phone:6789,

//     },

// }
// console.log(person.getFullName());
// console.log(person.phoneNumber.phone);



// ******object Constructors*******
// function person(fisrtName,lastName){
//     this.fisrtName=fisrtName;
//     this.lastName=lastName;


// }

// let person1=new person("Gaurav","mittal");
// let person2=new person("Khush","Sahu");
// console.log(person1.fisrtName);
// console.log(`${person2.fisrtName}${person2.lastName}`);




// *****object.create() funtion*****



// const coder={
//     isStuding:false,
//     printInformation:function(){
//         console.log(`my name is ${this.name}, Am I Studing?:${this.isStuding}.`);
//     },
// };


// const me= Object.create(coder);
// me.isStuding=true;
// me.name="Gaurav Mittal";

// me.printInformation();


// *****class*****


// class Vehicle{
//     constructor(name,maker,engine){
//         this.name=name;
//         this.maker=maker;
//         this.engine=engine;

//     };
//     getDetails(){
//         console.log(`Name of Car is ${this.name}, maker of the car is ${this.maker} ,engine ${this.engine}cc `);
//     };


// }

// let v1=new Vehicle("Creta","Hyundai",1500);
// let v2=new Vehicle("q5","Audi",3000);

// v1.getDetails();
// v2.getDetails();



// *****prototype*****
// function Vehicle(name,maker,engine){
//     this.name=name;
//     this.maker=maker;
//     this.engine=engine;

// }

// Vehicle.prototype.getinformation=function(){
//     console.log(`Name of Car is ${this.name}, maker of the car is ${this.maker} ,engine ${this.engine}cc `);
    
// }
// let v1=new Vehicle("Creta","Hyundai",1500);
// let v2=new Vehicle("q5","Audi",3000);

// v1.getinformation();
// v2.getinformation();




// *****Encapsulation*****


// class Person{
//     constructor(name,id){
//         this.name=name;
//         this.id=id;
//     };

//     addAddress(newAddress){
//         this.address=newAddress;
//     }
//     getDetails=function(){
//         console.log(`The name of Person is ${this.name} and address ${this.address}`);
//     }

// }

// let p1=new Person("Gaurav",20);
// p1.addAddress("Punjab");
// p1.getDetails();




// *****Abstraction******

// class Person{
//     constructor(firstName, lastName){
//       this.firstName = firstName;
//       this.lastName = lastName;
   
  
//   let getDetails_NoAccess = function(){
//     return "The first name is: $(this.firstName) and last name is: $(this.lastName)";
//     };
  
  
//     this.getDetails_Acess = function(){
//       return "The first name is: $(this.firstName) and last name is: $(this.lastName)";
//       };
//     } 
//   }
  
//   let person6 = new  Person("Shantanu", "Shubham");
  
//   console.log(perosn1.firstName);
//   console.log(person1.getDetails_NoAccess());
//   console.log(person1.getDetails_Access());
  
  
  
// *****Inheritence*****

class Person{
    constructor(firstName, lastName){
      this.firstName = firstName;
      this.lastName = lastName;
   
  
    getDetails_Acess = function(){
      return "The first name is: $(this.firstName) and last name is: $(this.lastName)";
      };
    } 
  }
  
  class Student extends Person{
    constructor(firstName, lastName, rollNumber){
      super(firstName,lastName);
      this.rollNumber = rollNumber;
  
    getDetails_Acess = function(){
      return "The first name is: $(this.firstName) and last name is: $(this.lastName) and the roll number is: $(this.rollNumber)";
      };
    }
  }
  let person1 = new  Person("Shantanu", "Shubham");
  
  console.log(perosn1.firstName);
  console.log(person1.getDetails_NoAccess());
  
  let studemt1 = new Student("Anurag","Mishra", 20);
  console.log(student1.getDetails());