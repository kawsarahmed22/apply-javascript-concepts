function milesToKilometers(miles){
    const kilometer = miles * 1.60934;
    return kilometer;
}

const twoMiles = 2;
const twoMilesToKilometer = milesToKilometers (twoMiles);
console.log(twoMilesToKilometer);