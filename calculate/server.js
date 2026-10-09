const http=require("node:http");

const server=http.createServer(function(req,res){
    if(req.url==="/getSecretData"){
        res.end("there is no data");
    }

    res.end("hello world!!");
})

server.listen(6969);