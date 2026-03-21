
//Implement pow(x, n), which calculates x raised to the power n (i.e., xn
function myPow(x: number, y: number): number {

    let temp:number=1;
    if(y==0)
    {
        return 1;
        
    }
    else if(y<0)
    {
         while(y<=-1)
        {
            
            temp*=x;
            y++;

        }
        temp=1/temp;

    }
    else    
    {
        while(y>0)
        {
           
            temp*=x;
            y--;

        }

    }

    return temp;
    
}


console.log("2 to the power of 10 :"+myPow(2,10))
console.log("2 to the power of 3 :"+myPow(2.1,3))
console.log("2 to the power of -2 :"+myPow(2,-2))
/* console.log("2 to the power of 0 :"+myPow(2,0))
console.log("2 to the power of 1 :"+myPow(2,1)) */
