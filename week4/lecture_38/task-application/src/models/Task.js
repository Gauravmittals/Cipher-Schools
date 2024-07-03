const {model,schema, Schema} = require("mongoose");

const TaskSchema =new Schema(
    {
        title:{type:String ,required:true},
        description:{type:String ,required:true},
        completed:{type:Boolean ,default:false},
        
    },
    {timestamps:true}

);

const taskModel =model("Task",TaskSchema);
module.exports=taskModel;
