const express=require("express");
const app=express();
const mongoose=require("mongoose");
const path=require("path");
const multer= require ('multer');
app.set(express.static(path.join(__dirname,"public")));
const {v4:uuid4}=require("uuid");
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
main().then(()=>{
console.log("connection sucessful");
})
.catch((err)=>{
    console.log(err);
})
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/Twitter X');
  
    // use `await mongoose.connect('mongodb://user

  }
app.listen(7070,()=>{
    console.log("listining to port:7070");

});
