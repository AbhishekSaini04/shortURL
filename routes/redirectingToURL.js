const express=require("express");

const {shortURL}=require("../models/shortURLModel");
const {shortURLGenerator}=require("../controller/shortURLgenerator");
const router=express.Router();

router.get("/:inputURL",async(req,res)=>{
    const inputURL=req.params.inputURL;
    const result=await shortURL.findOne({shortURL:inputURL});
    // console.log('shortID:',inputURL);
    // console.log("result:",result);
   
if(result && inputURL){
    // console.log("IF");
        await shortURL.findOneAndUpdate({shortURL:inputURL},{ $push: {visitHistory: Date.now().toString()}});
        return res.redirect(result.redirectURL);
}
else{

        return res.status(404).json({Error:"No Such URL found"});
}
    
        
});

module.exports=router;