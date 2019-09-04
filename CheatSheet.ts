export {}
//tsc main.ts           -> builds .js file
//tsc main --watch      -> to compile in watch mode (not necessasry to use above command every time a change is made)
//node main.js          -> to run

let message = 'Hello World';
console.log(message);

//let -> does not have to be declared
let x = 10;
//const -> has to be declared
const y = 20;

let sum;
const title = 'TypeScript for Beginners';

//---
//Declare variables
//---
let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'Ceci';

let sentence: string = `My name is ${name}
I am a beginner in TypeScript`;

console.log(sentence);

let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

//Array type -- Different syntax
let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];

//Tuple type
let person1: [string, number] = ['Chris', 22];

//Enum
//0, 1, 2...
enum Color {Red = 5, Green, Blue};
let c: Color = Color.Green;
console.log(c);

//Any type
let randomValue: any = 10;
randomValue = true;
randomValue = "Ceci";

//No errors when called as method or uses string methods
let myVariable: any = 10;
console.log(myVariable.name);
//-myVariable();
//-myVariable.toUpperCase();

//Unknown type
let myNewVar: unknown = 10;

function hasName(obj: any): obj is {name: string}{
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj
}

if(hasName(myNewVar)){
    console.log(myNewVar.name);
}
//- (myNewVar as string).toUpperCase();


//--- TypeScript can infer the type of a variable if assigned without type
let a;
a = 10;
a = true;

let b = 20;
//b = true; <- Error here!


//Union of Types
let multiType: number | boolean;
multiType = 20;
multiType = true;
// same as
let anyType: any;
anyType = 20;
anyType = true;
//Union types are good for IntelliSense support!


//---
//Functions
//---
function add(num1: number, num2: number): number{
    return num1 + num2;
}
console.log("Add " + add(5, 10));

//Optional parameters
function subtract(num1: number, num2?: number): number{
    if(num2)
        return num1 - num2;
    else
        return num1;
}
console.log("Subtract " + subtract(5));

//Can put set value instead of undefined
//num2: number = 10
//When run if there is no argument for num2
//it takes default value of 10 -> 5-10 = -5


//---
//Interfaces
//---
interface Person{
    firstName: string;
    lastName?: string; //? -> Optional parameter
}

function fullName(person: Person){
    console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
    firstName: 'Bruce'
};

fullName(p);


//---
//Classes
//---
class Employee {
    employeeName: string;

    constructor(name: string){
        this.employeeName = name;
    }

    greet(){
        console.log(`Good Morning ${this.employeeName}`);
    }
}

let emp1 = new Employee('Ceci');
console.log(emp1.employeeName);
emp1.greet();

//Inheritance
class Manager extends Employee{
    constructor(managerName: string) {
        super(managerName); //Calls employee class constructor to initialize employeeName
    }

    delegateWork(){
        console.log(`Manager delegating tasks`);
    }
}

let m1 = new Manager('Bruce');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);

////Access modifiers - public, private, protected

//public employeeName: string;

//private employeeName: string; -- Can not access even in the derived class

//protected employeeName: string; -- Can access in the derived class, but not outside of the base & derived class