const fs=require("fs");

setImmediate(()=>console.log("set immediate"));
setTimeout(()=>console.log("timer expired"),0);

Promise.resolve("outer promise 1").then(console.log);
Promise.resolve("outer promise 2").then(console.log);
process.nextTick(()=>console.log("outer nexttick"));

fs.readFile("./file.txt","utf8",()=>{
    console.log("file reading cb");
});

process.nextTick(()=>{
    console.log("inside process nexttick")
    process.nextTick(()=>console.log("inner nexttick 1"));
    process.nextTick(()=>console.log("inner nexttick 2"));
    Promise.resolve("inner promise 1").then(console.log);
    Promise.resolve("inner promise 2").then(console.log);
    
});

console.log("last line of file");