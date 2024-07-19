const {usersModel}=require("../models/usersModel");
const {v4:uuidV4}=require("uuid");
const {getUser,setUser}=require("../service/userAuth");
async function userSignupHandler(req, res){
    const {name,email,password}=req.body;
    // console.log(name,email,password);
    
    if(name && email && password){
        // console.log("in if block");
await usersModel.create({
        name:name,
        email:email,
        password:password,
    }).then(()=>{
// res.json({success:true});
return res.redirect("/");
}).catch((err)=>{
    res.json({success:false,error:err});
    
    });
 
}
}

async function userLoginHandler(req, res){
    const {email,password}=req.body;
   const user= await usersModel.findOne({email:email,password:password});
   if(!user){
    return res.render("login",{
        error:"invalid username or password"
    }) ;
   }
   const sessionID=uuidV4();
   setUser(sessionID,user);
//    setUser("astro","astroprime");
//    log
   res.cookie("uid",sessionID)
   return res.redirect("/");
}
module.exports={userSignupHandler,userLoginHandler}