const express=require("express");
const {userSignupHandler,userLoginHandler}=require("../controller/userHandler");
const router = express.Router();

router.post("/signup",userSignupHandler);
router.post("/login",userLoginHandler);


module.exports=router;