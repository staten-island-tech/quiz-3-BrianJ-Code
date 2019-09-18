/* let bills = [140, 45, 270];
function tipcalculator(bills){
   let tip_percentage;
    if(bills < 50){
        tip_percentage = 0.2
    }else if (bills > 200){
        tip_percentage = 0.15
    }else {
        tip_percentage = 0.1
    }
    return bills * tip_percentage
}

function billcalculator(bills){
    return bills + tipcalculator(bills)
}
const tip_amount = [tipcalculator([0]),tipcalculator([1]),tipcalculator([2])];
const bill_total = [billcalculator[(0)],billcalculator[(1)],billcalculator[(2)]];
const copy = bills.filter(bills < 100);
console.log(copy); */

const Dejon = {
    name: "Dejon Kurti",
    mass: 78,
    height: 1.69,
    Dejon_BMI : function () {
       return (this.mass / this.height * this.height);
    }
}
const Rob = {
    name: "Robert Grande",
    mass: 110,
    height: 1.95,
    Rob_BMI : function () {
        return (this.mass / this.height * this.height);
     }
}
if (Rob_BMI > Dejon_BMI){
    console.log ("Robert Grande has the bigger BMI and this is his BMI:" + Rob.height)
}else {console.log ("Dejon Kurti has the bigger BMI and this is his BMI:" + Dejon.height)
}