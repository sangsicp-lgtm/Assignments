
//optional parameters
function greet(name?:string)
{
    console.error("hello world ");
}
greet();

//default parameters
let empDetails= (empName:string,empId:number, empStatus:boolean= true)=>{
    console.log(empName+" "+empId+" "+empStatus);
}

empDetails("SangeethaCP",1234);

//Rest Parameters

let empData= function(...z:number[]){ 
    let temp=0;
    z.forEach((number)=>temp+=number);
    console.log(`sum of array: ${temp}`);
    
};

empData(1,2,3,4,5);
empData(1,2,3);
empData(0);