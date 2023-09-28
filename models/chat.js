const mongoose=require("mongoose");
const chatSchema = new mongoose.Schema({
    from:{
        type:String,
        require:true,
    },
})