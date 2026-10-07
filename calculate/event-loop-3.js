const fs=require("fs")
setImmediate(()=>console.log("set immediate"));
setTimeout(()=>console.log("timer expired"));

Promise.resolve("promise").then(console.log);

fs.readFile("./file.txt","utf8",()=>{
    setTimeout(()=>console.log("2nd timer"),0);

    process.nextTick(()=>console.log("2nd texttick"));
    setImmediate(()=>console.log("2nd immediate"));

    console.log("file reading CB");
});

process.nextTick(()=>console.log("next tick"));
console.log("last line of file");