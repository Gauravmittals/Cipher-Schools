var x = 25;
{
    let x = 12;
    console.log(x);
}
console.log(x);

//arrow function
const a = (x, y) => x + y;
console.log(a(12, 8));


// array
const q1 = ["jan", "feb", "mar"];
const q2 = ["apr", "may", "june"];
const q3 = ["jul", "aug", "sep"];
const q4 = ["oct", "nov", "dec"];

const year = [...q1, ...q2, ...q3, ...q4];
console.log(year);


const myNumbers = [25, 12, 50, 77, -1];
let maxValue = Math.max(...myNumbers);

console.log(maxValue);

let sum = 0;
for (let num of myNumbers) {
    sum += num;
}
console.log(sum);

const name = "CipherSchools";

let text = "";
for (let ch of text) {
    text += ch;

}
consloe.log(text);

// maps

const fruits = new Map([
    ["apples", 500],
    ["mango", 200],
    ["banana", 300],
]);
console.log(fruits);
console.log(fruits.get("oranges"));


// sets

const letters = new Set();
letters.add("A");
letters.add("b");
letters.add("A");

comsole.log(letters);


// classes
class car {
    constructor(name, mfgYear) {
        this.name = name;
        this.mfgYear = mfgYear
    }

}

const myCar1 = new Car("Mercedes", 2022);
const myCar2 = new car("honda", 2020);

console.log(myCar2, myCar1);

//promise

const myFunction = () => {
    return myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("This is Inside Promise");
            resolve();
        }, 2000);
    });
};
myFunction()
    .then(() => {
        console.log("Resolved");
    })
    .catch(() => {
        console.error("Rejected");
    })

//Object
const person = {
    firstName: "Prince",
    lastName: "Kumar",
    number: "235415614035",
}
person["id"] = "sdfh435h354"
console.log(person)


//default value
const addTwoNumber = (a, b = 0) => a + b;
console.log(addTwoNumber(10));


// rest operator
const addNumbers = (...args) => {
    let sum = 0;
    for (let arg of args) {
        sum += arg;
    }
    return sum;
};
console.log(addNumbers(1, 2, 3, 4, 5, 6));
