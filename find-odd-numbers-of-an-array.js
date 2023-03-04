function findOddNumbersOfAnArray(numbers){
    const oddNumbers = []
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if(element % 2 !== 0){
            oddNumbers.push(element)
        }
    }
    return oddNumbers
}

const myNumbers = [2,3,4,5,6,7,8,9,10]
const oddNumbers = findOddNumbersOfAnArray(myNumbers)
console.log(oddNumbers);