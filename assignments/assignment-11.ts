//Print the numbers in diamond-shaped pyramid of numbers.
{
let noOfRows: number = 6;
let pattern: string = "";


for (let row: number = 1; row <= noOfRows-1; row++) {
    pattern = "";

    for (let space: number = noOfRows; space > row; space--) {
        
        pattern += " ";
    }

    for (let col: number = 1; col<=row; col++) {

        pattern += col + " ";      
       
    }
    console.log(pattern);

}

for (let i = noOfRows - 2; i >= 1; i--) {
        let pattern = "";

        // Spaces
        for (let space = 1; space <= noOfRows - i; space++) {
            pattern += " ";
        }
        //numbers with internal spaces
        for (let j = 1; j <= i; j++) {
            pattern += j + " ";
        }

        console.log(pattern);
    }
}

