
require("./xyz.js");//one module into another

//const{x,calculateSum}=require("./sum.js");

//const {calculateMultiply}=require("./multiply.js")

const {calculateSum,calculateMultiply}=require("./calculate")

var name="prateek"
var a=20

var b=40

calculateSum(a,b);
calculateMultiply(a,b);

console.log(name)

//console.log(x);



