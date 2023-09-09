const express=require("express");
const app=express();
const port=7070;
const path=require("path");
const {v4:uuid4}=require("uuid");
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.set(express.static(path.join(__dirname,"public")));
let post =
app.listen(port,()=>{
    console.log("listining to port:7070");
});
