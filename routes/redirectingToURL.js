const express=require("express");
const {shortURL}=require("../models/shortURLModel");
const {shortURLGenerator}=require("../controller/shortURLgenerator");
const router=express.Router();

router.get("/:inputURL",async(req,res)=>{
    const inputURL=req.params.inputURL;
    const result=await shortURL.findOne({shortURL:inputURL});
    if(inputURL && inputURL!=="url" && result){

        await shortURL.findOneAndUpdate({shortURL:inputURL},{ $push: {visitHistory: Date.now().toString()}});
    
    //  res.json({redirectURL:result.redirectURL});
    return res.status(200).redirect(result.redirectURL)


    }else{
        return res.status(404).json({Error:"No Such URL found"});
    }
    return  res.status(200).json({page:"home page"});
        

        
        
});


module.exports=router;