//Write a program to print * in  left handed triangle pattern
let noOfRows = 3;
console.log("Left Handed Triangle Pattern:");
for (let i: number = 0; i < noOfRows; i++) {
    let pattern: string = "";
    for (let j: number = 0; j < noOfRows - i - 1; j++) {
        pattern += " ";
    }
    for (let j: number = 0; j <= i; j++) {
        pattern += "*";
    }

    console.log(pattern);

}

console.log("Pyramid Pattern:");

let noOfRows1 =5;
for(let i: number=1; i<= noOfRows1;i++)
{
    let pattern:string="";
    for(let k=noOfRows1;k>i;k--)
    {
         pattern+=" ";
    }

    for(let j=1;j<=2*i-1;j++)
    {
        pattern+="*";
    }
    console.log(pattern);
  
}

