function greet():string{
    return "Normal function with function name";
}

console.log(greet());

//anonymous function without function name assigned to a variable
let variable = function():string{
    return "Anonymous function without function name";
};
console.log(variable());

//lambda function or arrow function assigned to a variable
let value= ():string=>{
    return "Arrow function and return type assigned to a variable";
};
console.log(value());
