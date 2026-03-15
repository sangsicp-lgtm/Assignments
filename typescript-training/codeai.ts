function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
        break;
    }
    return true;
}

const numbers = [25, 7, 8, 1, 9];
const results = numbers.map(n => ({
    number: n,
    isPrime: isPrime(n)
}));

console.log(results);