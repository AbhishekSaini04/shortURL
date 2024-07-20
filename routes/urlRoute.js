const express = require("express");



const { shortURL } = require("../models/shortURLModel");
const { shortURLGenerator } = require("../controller/shortURLgenerator");
const router = express.Router();
router.post("/", async (req, res) => {
  const body = req.body;
  const redirectURL = body.url;
  if (redirectURL) {
        // const result =await fetch("google.com");
        await fetch(redirectURL).then(async()=>{
          
    const generatedShortURl = shortURLGenerator(8);
    const result = await shortURL.create({
      shortURL: generatedShortURl,
      redirectURL: redirectURL,
      visitHistory: [],
      createdBy:req.user._id,
    });
    if (result) {
      // console.log("RESULT:",result);
      const url = new URL(
        `${req.protocol}://${req.get("host")}${req.originalUrl}`
      );


      const allUrls=await shortURL.find({createdBy:req.user._id});
      return res.status(200).render("home", {
        shortURL: `${url.origin + "/rd/" + generatedShortURl}`,
        urls:allUrls,
      });
    }
      
      }).catch((err)=>{
        return res.status(404).json({ Error: "invalid url"});
        // console.log(err);
          // console.log("err occured");
      });
      

  } else {
    return res.status(404).json({ Error: `Redirect URL is Required` });
  }
  // res.json({yourURL:body.url});
  // console.log("URL ROUTE");
});

module.exports = router;
