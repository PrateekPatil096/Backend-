const fs=require("fs");

setImmediate(()=>console.log("set immediate"));
setTimeout(()=>console.log("timer expired"),0);

Promise.resolve("promise").then(console.log);

fs.readFile("./file.txt","utf8",()=>{
    console.log("file reading cb");
});

process.nextTick(()=>{
    process.nextTick(()=>console.log("inner nexttick"));
});

console.log("last line of file");