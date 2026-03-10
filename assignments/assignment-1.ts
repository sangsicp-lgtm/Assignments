//Assignment 1 in Datatypes:
//Done by Sangeetha C.P on 9/3/2026

// 1.Temperature of a city in degrees Celsius: 25.5

let temparatureInCelsius: number= 25.5;
console.log("1.Temperature of Trivandrum in Degree Celsius is: "+ temparatureInCelsius);

//2.Whether a customer has placed an order: true or false
let orderPlaced:string= "true";
let orderPlacedYesOrNo:boolean= (orderPlaced == "true");
console.log('2.Customer has placed an order: '+ orderPlacedYesOrNo);

//3.Person's phone number: "123-456-7890"
let phoneNumber : string |number= "123-456-7890";
console.log("3.Person's Phone number is :" + phoneNumber);

//4.Amount of money in a customer's bank account: 1000.50
let customerAccountBalance: number=1000.50;
console.log("4.Amount of money in a customer's bank account: " +customerAccountBalance);


interface personInfo {
    emailId:number|string,
    maritalStatus:boolean,
    occupation:string,
    favColor:string,
    eyeColor: string,
    birthPlace: string,
    bloodType: string
}
  
let person: personInfo = {
    emailId:"john.doe@example.com",
    maritalStatus:true,
    occupation:"Software Engineer",
    favColor:'"Blue"',
    eyeColor:'"Brown"',
    birthPlace:'"NewYork"',
    bloodType:"'A'"
}


//5.Person's email address: "john.doe@example.com"
console.log("5.Person's email address: "+ person.emailId);

//6.Coordinates of a location (latitude, longitude): 37.7749, -122.4194
let locationCoordinates: (string|number)[] = [37.7749, -122.4194];
console.log("6.Coordinates of a location is " + locationCoordinates);

//7.Person's marital status: true or false
let personMaritalStatusYesOrNo:boolean= (person.maritalStatus == true);
console.log("7.Person's marital status: " + personMaritalStatusYesOrNo);


//8. Person's occupation: "Software Engineer"
console.log("8.Person's occupation is "+ person.occupation);

//9. Person's favourite colour: "Blue"
console.log("9.Person's favourite colour: " + person.favColor);

//10.Current year: 2026
let currentYear = new Date();
console.log("10.Current Year is "+ currentYear.getFullYear());

//11.Number of followers on a social media platform: 1,000,000
let noOfFollowers: string= "1,000,000";
console.log("11.Number of followers on a social media platform is "+ noOfFollowers);

//12.Rating of a movie: 7.5
let movieRating: number= 7.5;
console.log("12.Rating of a movie "+ movieRating);

//13.Person's blood type: 'A'
console.log("13.Person's BloodType: " + person.bloodType);

//14.Title of a book: "To Kill a Mockingbird"
let bookTitle: string= '"To Kill a Mockingbird"';
console.log("14.Title of a book: "+ bookTitle);

//15.Number of employees in a company: 500
let totalEmployees: number= 500;
console.log("15.Number of employees in a company: "+ totalEmployees);

//16.Time of an event: 2:30 PM
let eventTime = new Date();
console.log("16.Time of an event is: "+ eventTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: true}));

//17.Name of a country: "United States"
let country: string= '"United States"';
console.log("17.Name of a country: "+ country);

//18.Person's eye color: "Brown"
console.log("18.Person's eye color: " + person.eyeColor);

//19.Person's birthplace: "New York City"
console.log("19.Person's birthplace: " + person.birthPlace);

//20. Distance between two cities: 200.5
let diffBtw2Cities: number= 200.5;
console.log("20. Distance between two cities: "+ diffBtw2Cities);
