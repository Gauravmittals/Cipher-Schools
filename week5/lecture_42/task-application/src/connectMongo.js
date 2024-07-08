const {connect}= require("mongoose");
const MONGO_URL="mongodb+srv://gauravmittals100:roota@cluster0.fjhhp1z.mongodb.net";

const DB_NAME=`cipherschool`;

async function connectDB(){
    try
    {await connect(`${MONGO_URL}/${DB_NAME}`);
console.log("Connected to DB")}
catch(err){
    console.error(err);
    console.log(err);
}
}

connectDB();
