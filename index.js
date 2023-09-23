const express=require("express");
const app=express();
const mongoose=require("mongoose");
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
  
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  }
const path=require("path");
const {v4:uuid4}=require("uuid");
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.set(express.static(path.join(__dirname,"public")));
 app.get("/",(req,res)=>{
res.send("root is working")
 });
app.listen(7070,()=>{
    console.log("listining to port:7070");

});
