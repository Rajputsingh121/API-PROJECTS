const mongoose=require("mongoose");
const chatSchema = new mongoose.Schema({
    from:{
        type:String,
        require:true,
    },
});
const chat=mongoose.model("chat",chatSchema);
module.exports=chat;