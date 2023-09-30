const express=require("express");
const app=express();
const mongoose=require("mongoose");
const path=require("path");
const chat=require("./models/chat.js");
const multer= require ("multer");
app.set("views",path.join(__dirname,"views"));
app.set(express.static(path.join(__dirname,"public")));
const {v4:uuid4}=require("uuid");
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
main().then(()=>{
console.log("connection sucessful");
})
.catch(err=>{
    console.log(err);
});
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/Twitter ");
  
    // use `await mongoose.connect'mongodb://user

};
 //Index route
app.get("/chats",async(req,res)=>{
let chats=await chat.find();
console.log(chats);
res.render("index.ejs",{chats});
})

app.get("/",(req,res)=>{
    res.send("root is working");
})

app.listen(7070,()=>{
    console.log("listining to port:7070");

});
