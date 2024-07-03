
const express = require("express");

const app = express();

app.get("/",(req,res)=>{
    res.send("Hello World");
});

app.get("/add",(req,res)=>{
    let {a:firstNum,b:secondNum}=req.query;
    let sum=parseInt(firstNum)+parseInt(secondNum);
    res.send({sum});
    
})
app.listen(3000,()=>{
    console.log(`Server is running on port 3000`);
});