require("./connectMongo");
const express = require("express");
const task = require("./models/Task");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
});

// app.get("/add", (req, res) => {
//     let { a: firstNum, b: secondNum } = req.query;
//     let sum = parseInt(firstNum) + parseInt(secondNum);
//     res.send({ sum });

// })

app.post("/add-task", async (req, res) => {
    const Task = new task({ title: "Test title", description: "Test description", });
    await Task.save();
    return res.status(201).send({ message: "saved!" })

});

app.get("/get-tasks", async (req, res) => {
    const taskList = await task.find();
    return res.status(200).send(taskList);
});

app.put("/update/:taskId", async (req, res) => {
    const { taskId } = req.params;
    const updateResult = await task.updateOne(
        { _id: taskId },
        { $set: { ...req.body }, }
    );
    if (!updateResult.matchedCount) {
        return res.status(404).send({ message: `Task with taskID: ${taskId} Task not found!` });
    }
    return res.status(200).send({ message: "updated!" });
});

app.delete("/delete/:taskId",async(req,res)=>{
    const { taskId } = req.params;
    const deleteResult = await task.deleteOne(
        { _id: taskId },
        
    );
    if (!deleteResult.deletedCount) {
        return res.status(404).send({ message: `Task with taskID: ${taskId} Task not found!` });
    }
    return res.status(200).send({ message: "updated!" });
})


app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});