const http = require("http");

const server = http.createServer((req,res)=>{
    res.write("This is some response for your first Node is server");
    res.end();
});

server.listen(3000,()=>{
    console.log("Server is running on port 3000");
});