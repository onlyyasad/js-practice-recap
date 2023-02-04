
function smallestNumberFinder(arr){
    let smallest = Infinity;
    for (number of arr){
        // console.log(number)
        if (number<smallest){
            smallest = number;
        }
    }
    return smallest;
}

const numbers = [40, 70, 25, 91, 13];
const smallestNumber = smallestNumberFinder(numbers);
console.log(smallestNumber);