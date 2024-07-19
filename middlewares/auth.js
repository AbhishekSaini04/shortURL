const {getUser}=require("../service/userAuth");

function restrictUserToLoggedIn(req,res,next){
    const sessionID=req.cookies?.uid;
    // console.log("cookie:",sessionID);
    // console.log(req.cookies?.uid);
    // console.log(req.headers.cookie.uid);
    //console.log(req.cookie?.uid);
    if(!sessionID){return res.redirect("/login");}
    const user=getUser(sessionID);
    // console.log("user:",user);
    if(!user){return res.redirect("/login")};
 req.user=user;
 next();

}

async function checkAuth(req,res,next){
    const sessionID=req.cookies?.uid;
   
    const user=getUser(sessionID);
 req.user=user;
 next();

}

module.exports={restrictUserToLoggedIn,checkAuth}