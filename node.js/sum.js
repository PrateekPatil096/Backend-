console.log("sum module got excuted");

var x="hello";

function calculateSum(a,b){
        const sum =a+b;
        console.log(sum)

}
module.exports={
    x: x,
    calculateSum:calculateSum,
};