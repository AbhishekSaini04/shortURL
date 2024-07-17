const mongoose=require("mongoose");
const shortURLSchema=new mongoose.Schema({
    shortURL:{
        type:String,
        unique:true,
        required:true,
    },
    redirectURL:{
        type:String,
        required:true
    },
    visitHistory:[]
});

const shortURL=mongoose.model("shortURL",shortURLSchema);


module.exports={shortURL};