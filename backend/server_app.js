const express=require("express");
const app=express();
const connectToDatabase=require("./connection");
const model=require("./model");
const auth=require("./auth");
const list=require("./list")
const mmm=require("./usermodel")
app.use(express.json());

app.use("/api",auth)
app.use("/api",list)


connectToDatabase();

 

app.listen(3001,()=>{
    console.log("server başladı");
})