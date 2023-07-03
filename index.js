const getScore = require("./routes/getscore");
const addScore=require("./routes/addScore");
// const Delete=require("./routes/delete");
const UserLogin=require("./routes/userLogin");
const UserRegister=require("./routes/userRegister");
const Users=require("./routes/users");
const express=require('express');
const mongoose=require("mongoose");
const cors =require ('cors');
const PORT=process.env.PORT||8080
require('dotenv').config();
const app=express();
const url=process.env.MONGODB_URL;
mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log("MongoDB is connected!!!");
})
.catch((err)=>{
console.log("Error: ",err);
});
app.use(express.json()); // For parsing JSON request bodies
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/scores",getScore);
app.use("/scores",addScore);
app.use("/login",UserLogin);
app.use("/register",UserRegister);
app.use("/users",Users);

app.listen(PORT,()=>console.log("The server is connected!!!"));