function isEven(number){
    const evenNumber = number % 2 == 0;
    if(evenNumber){
        console.log('Number is even');
    }
    else{
        console.log('Number is odd');
    }
}

isEven(221)