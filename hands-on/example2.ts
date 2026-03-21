/* Exercise 1.1: Square Number
Write a lambda function named square that takes a number and returns its square.
Exercise 1.2: Concatenate Strings
Write a lambda function greet that takes a first name and last name, returning a fully formatted greeting string. */


let value = (a:number):number=>{return a*a};
console.log(value(5));

let person = (firstname:string,lastName:string):string=> {return "hello "+firstname+lastName};
console.log(person("Sangeetha","CP"));