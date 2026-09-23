
require("./xyz.js");//one module into another

const{x,calculateSum}=require("./sum.js");

var name="prateek"
var a=20

var b=40

calculateSum(a,b);

console.log(name)

console.log(x);



