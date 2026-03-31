//array is a collection of multiple values

//1. Creating an array. 
console.log("1. Creating an array.")
let fruits :string [] = ["Apple","Banana","Cherry"];
let prices :number [] = [100, 20, 50, 10];
let fruitsAndPrices :(string |number) [] = ["Apple",100,"Banana",20,"Cherry",50];
console.log(fruits);
console.log(prices);
console.log(fruitsAndPrices);


//2. Access elements from the array
console.log("2. Access elements from the array")
console.log(fruits[1]);//banana
console.log(fruits.length);

//3. Adding additional values to the existing array at the end. 
console.log("3. Adding additional values to the existing array at the end. ")
fruits.push("Mango");
console.log(fruits);

//4. Remove the existing value from the array at the end. 
console.log("4. Remove the existing value from the array at the end.")
fruits.pop();
console.log(fruits);

//5. Add additional values to the existing array at the beginning. 
console.log("5. Add additional values to the existing array at the beginning. ")
fruits.unshift("Mango");
console.log(fruits);

//6. Remove the existing value from the array at the begining. 
console.log("6. Remove the existing value from the array at the begining.")
fruits.shift();
console.log(fruits);

//7. Add or remove one or more values within the array from specific index. (splice)
console.log("7.Add or remove one or more values within the array from specific index. ");
console.log(fruits);
fruits.splice(2,0);
console.log(fruits);