// Simple Interest 

// Problem: What is the S.I on Tk. 2500 at the rate of 12% per annum for 8 years?


function simpleInterestFinder(p,n,r){
    let i = (p*n*r) / 100;
    return i;
}

const principal = 1000;
const numberOfYears = 2;
const rate = 10;
let totalInterest = simpleInterestFinder(principal, numberOfYears, rate);
console.log(totalInterest)

