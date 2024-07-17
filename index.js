const express=require("express");
const app=express();
const PORT=3000;
const urlRoute=require("./routes/urlRoute");
const redirectRoute=require("./routes/redirectingToURL");
app.use(express.json());
const {shortURLGenerator}=require("./controller/shortURLgenerator");
const {connectToDB}=require("./config");
const {shortURL}=require("./models/shortURLModel");
const fakeData=require("./fakeData.json");
connectToDB("mongodb://localhost:27017/URLShortner");

const databaseData=shortURL.find({});

// console.log("DATABASEDATA=",databaseData);
// console.log(shortURLGenerator(10,databaseData));


// shortURL.create({
//     shortURL:"fdsfsgfw",
//     redirectURL:"dasd",
//     visitHistory:[]
// });


app.use("/url",urlRoute);
app.use("/",redirectRoute);
app.get("/",(req,res)=>{
    res.status(200).json({hello:"homePAge"});

});

app.listen(PORT,()=>{
    console.log("Server Runnin on PORT:",PORT);
})