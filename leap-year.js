function isLeapYear(year){
    if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
        return `Yes this year is leap year`;
    }
    else{
        return `No this year is not a leap year`
    }
}
// {
//   return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
// }
const result = isLeapYear(2021)
console.log(result);