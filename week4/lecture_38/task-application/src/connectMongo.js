const {connect}= require("mongoose");
const MONGO_URL="mongodb://localhost:27017/";

const DB_NAME=`cipherschool`;

async function connectDB(){
    try
    {await connect(`${MONGO_URL}/${DB_NAME}`);
console.log("Connected to DB")}
catch(err){
    console.error(err);
}
}

connectDB();
