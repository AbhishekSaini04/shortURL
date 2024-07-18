const express=require("express");

const {shortURL}=require("../models/shortURLModel");
const {shortURLGenerator}=require("../controller/shortURLgenerator");
const router=express.Router();
router.post("/",async(req,res)=>{
const body=req.body;
const redirectURL=body.url;
if(redirectURL){

    const generatedShortURl=shortURLGenerator(8);
    const result=await shortURL.create({
        shortURL:generatedShortURl,
        redirectURL:redirectURL,
    visitHistory:[],
});
if(result){
    // console.log("RESULT:",result);
    const url = new URL(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
    // console.log(url);
    // return res.status(200).json({shortURl:`${url.origin+"/"+generatedShortURl}`});
    return res.status(200).render("home",{
        shortURL:`${url.origin+"/"+generatedShortURl}`,
    });
    
}
}else{
    
    return res.status(404).json({Error:`Redirect URL is Required`});
}
// res.json({yourURL:body.url});
// console.log("URL ROUTE");


});


module.exports=router;