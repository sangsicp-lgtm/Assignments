//creating  type safety using interface
interface EmployeeInfo{
    name: string,
    Id: number,
    role:string,
    age?:number,
    visaStatus?: boolean,
    address:{
        city:string,
        State:string,
        ZipCode:number
    }
}

let Employee : EmployeeInfo={
    name:"Sangeetha",
    Id:12345,
    role:"QA Engineer",
    visaStatus:false,
    address:{
        city:"TVM",
        State:"Kerala",
        ZipCode:695583
    }
}

//accessing the data either with . or [""] in object 

console.log(Employee.name);
console.log(Employee["Id"]);

console.log(Employee.address["city"]);
console.log(Employee.address.State);

//adding/modifying properties, deleting with delete keyword,
//adding a new property to the Object
Employee.age=37;
console.log(Employee.age);

//updating existing property in the Object
Employee.role="Senior QA Engineer";
console.log(Employee.role);

//delete a property which should be a optional parameter
delete Employee.visaStatus;
console.log(Employee);

//checking property existence with 'in' operator
console.log("age" in Employee)
console.log("ZipCode" in Employee.address)

// getting keys (Object.keys()), values (Object.values()), entries (Object.entries())
console.log(Object.keys(Employee.address))
console.log(Object.values(Employee.address))
console.log(Object.entries(Employee.address))

console.log(Employee)

//iterate all the keys in Object
for(let emp in Employee)
{
   console.log(Employee[emp as keyof EmployeeInfo]);
}

//checking types with typeof and instanceof.
console.log(typeof Employee.Id)
console.log(Object.entries(Employee).find(([key,val]) => key === "address")?.[1]);

//Merge two different objects together. 
interface projectInfo {
    projectName: string,
    projectId:number
}

let project:projectInfo={
    projectName : "Amazon",
    projectId : 1234
}

let mergedObject = {...Employee,...project};
console.log(mergedObject);
