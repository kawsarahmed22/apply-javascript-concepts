function factorial (numbers){
    let factorial = 1
    for (let i = 1; i <= numbers; i++){
        factorial = factorial * i
    }
    return factorial
}

// function factorial (numbers){
//     let factorial = 1
//     for (let i = numbers; i >= 1; i--){
//         factorial = factorial * i
//     }
//     return factorial
// }

console.log(factorial(5));