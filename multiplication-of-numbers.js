function multiplicationOfNumbers(n){
    let multiplication = 1;
    for (let i = 1; i <= n; i++){
        multiplication = multiplication * i;
    }
    return multiplication;
}

console.log(multiplicationOfNumbers(4));