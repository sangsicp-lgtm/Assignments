//Assignment -3 (Arrays/Datatypes/Operators)
//Done by Sangeetha C.P on 11/3/2026
/* 1. Create two arrays to store student names ["Suresh","Mahesh","Naresh"] and
marks [75, 80, 82] Add 10 marks to each students using assignment operators and
store it into another array, after adding 10 marks identify the average marks of all
students

Expected Output:
Updated Marks:
Suresh: 85
Mahesh: 90
Naresh: 92
Average Marks: 89.0 */

let studentNames:string[]=["Suresh","Mahesh","Naresh"];
let studentMarks:number[]=[75,80, 82] ;
let studentUpdatedMarks:number[]=[];

let averageMark :number=0;

console.log("Student Marks");
console.log(studentMarks);

console.log("Updated Marks");

for(let i:number = 0; i< studentMarks.length ; i++)
{
    studentUpdatedMarks[i]= studentMarks[i]+10;
    averageMark+=studentUpdatedMarks[i];
    console.log(`${studentNames[i]} : ${studentUpdatedMarks[i]}`);

}

console.log(`AverageMarks : ${averageMark/studentMarks.length}`);