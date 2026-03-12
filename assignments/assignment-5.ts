//Assignment-5 (Conditional Statements & Loops)
//Done by Sangeetha C.P on 12/3/2026

let hike:number=0;
let hikePercent:number=0;
let employeeData= new Map();

    //input employee data
hikePercentofEachEmployee("Alice Johnson",75000,5.1,4.2);
hikePercentofEachEmployee("Bob Smith",68000,3.2,3.8);
hikePercentofEachEmployee("Carol Davis",82000,7.1,4.5);
hikePercentofEachEmployee("David Brown",90000,10.2,2.5);
hikePercentofEachEmployee("Eva Green",60000,2.4,3.5);

function hikePercentofEachEmployee(empName:string,baseSalary:number,experience:number,rating:number)
:void{

   
        if(rating>=4)
        {   
            if(experience>=5)
            {
                 hike=(baseSalary*15)+1500+5000;
            }
            else{
                 hike=(baseSalary*15)+1500;
            }
           

        }
        else if( rating>=3 && rating<4 )
        {
            if(experience>=5)
            {
                 hike=(baseSalary*10)+1200+5000;
            }
            else{
                 hike=(baseSalary*10)+1200;
            }

        }
        else{
            if(experience>=5)
            {
                 hike=(baseSalary*3)+300+5000;
            }
            else{
                 hike=(baseSalary*3)+300;
            }
        }

        hikePercent= hike/baseSalary;
        employeeData.set(empName,hikePercent);
       
}

//Employee datas
console.log("EmployeeNames with their hike percentage");
console.log(employeeData);