/* //Assignment-6 (Prime factor)
//Done by Sangeetha C.P on 15/3/2026

/* Given a number n, determine whether it is a prime number or not. A prime number is a
number greater than 1 that has no positive divisors other than 1 and itself. */

//input number to check for prime

checkPrimeNumber(7);
checkPrimeNumber(25);
checkPrimeNumber(1);

function checkPrimeNumber(numberToCheck: number): void {
    let isPrime: boolean = true;
    let i: number = 2;
    if (numberToCheck >= 1) {
        while (numberToCheck > i) {

            if (numberToCheck % i == 0) {
                isPrime = false;
            }
            i++;
        }

        isPrime == true ? console.log(`Given number ${numberToCheck} IS A PRIME: ` + isPrime) : console.log(`Given number ${numberToCheck} is NOT A PRIME: ` + isPrime);
    }
    else {
        console.log(`Given number ${numberToCheck} is not a positive number`);
    }
}

