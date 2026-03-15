//Data types in javascript

//1.Primitive Datatypes(Immutable):
//2.Non-Primitive Datatypes(Mutable):

//Immutable
let a=10;
a+10;
console.log(a);

//mutable
let obj={
    name:"Sangeetha",
    empId:1234
}
obj.age=35;
console.log(obj);

//Datatypes in Jvascript
/*************Primitive datatypes********* */
//number,string, boolean,undefined, null and symbol

//1. number ==> The data type to store numbers with decimals, without decimals, without using any quotations 
let num1 =10;
let num2 =12.23187;
console.log(typeof num1);
console.log(typeof num2);

//2. string ==> The data type to store text values or a collection of characters together within the quotations (single, double quotes or backticks)
let empName = 'Bharath';
let location = "Hyde'r'abad";
let company = `Microsoft`;
console.log(typeof empName);
console.log(typeof location);
console.log(typeof company);

console.log("Emp Name is "+empName+ " Emp location is "+location);
console.log (`Emp name is ${empName} and Emp Location is ${location}`);

//3. boolean ==> The data type to store true or false values
let x = 10;
let y = 20;
let z = x > y;
console.log(typeof z);

//4. undefined ==> undefined represents a variable that has been declared but not assigned any value. 
let age;
console.log(age);

//5. null ==> Null represents a variable that has been declared and assigned a null or empty value. 
let salary = null;
//salary = NaN;
console.log(salary);

//6. Symbol ==> Symbol represents a unique hidden identifier. 

let price = Symbol('price');
//price=1000;

//let countryOfOrigin= Symbol();

let productInfo = {
    productName : "One Plus 17",
    countryOfOrigin : Symbol(),
    rate:price,
}

console.log(price); 
console.log(productInfo);


/* const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
  [Symbol('id')]:123456
};

let id = Symbol('id');
console.log(id);
person1[id] = 140353;
console.log(person1[id]); */

//console.log(person1);


/********************************************/
/**********Non-primitive Datatypes***********/
/********************************************/

//1.object ==> Object data type represents a collection of key-value pairs within the curly braces. 
/* let person = {
    name: "Bharath",
    empId:1234,
    visaStatus: true,
    address: {
        city :"hyderabad",
        state:"TS",
        zip:500081
    }
}
 */
let person={
    name:"Sangeetha",
    empId:123,
    address:{
        city:`Thiruvananthapuram`,
        State:'Kerala',
        ZipCode:665582
    }
};
person.salary = 100000;

//print the data
console.log(person.name);
console.log(person.address.ZipCode);

console.log(person["name"]);
console.log(person.address["city"]); 

console.log(person.address["city"]);

//2. array ==> Array data type represents a collection of values within the square brackets.
let arr = [10,20,30,40,50];
console.log(arr[0]);
console.log(arr[3]);

    