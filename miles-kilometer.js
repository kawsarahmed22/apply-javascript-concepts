function milesToKilometers(miles){
    const kilometers = miles * 1.60934;
    return kilometers;
}

const twoMiles = 2;
const twoMilesToKm = milesToKilometers (twoMiles);
console.log(twoMilesToKm);