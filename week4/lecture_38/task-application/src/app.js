require("./connectMongo");
const express = require("express");
const task = require("./models/Task");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
});

// app.get("/add", (req, res) => {
//     let { a: firstNum, b: secondNum } = req.query;
//     let sum = parseInt(firstNum) + parseInt(secondNum);
//     res.send({ sum });

// })

app.post("/add-task", async (req, res)=>{
    const Task = new task({ title: "Test title", description: "Test description", });
    await Task.save();
    return res.status(201).send({ message: "saved!" })

})
app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});