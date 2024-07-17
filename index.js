const express=require("express");
const app=express();
app.set('trust proxy', true);
const PORT=3000;
require("dotenv").config();


const urlRoute=require("./routes/urlRoute");
const redirectRoute=require("./routes/redirectingToURL");
app.use(express.json());
const {shortURLGenerator}=require("./controller/shortURLgenerator");
const {connectToDB}=require("./config");
const {shortURL}=require("./models/shortURLModel");
// const fakeData=require("./fakeData.json");
// process.env.PORT 
const connectionString=process.env.MONGODB_ONLINE || process.env.MONGODB_OFFLINE;
connectToDB(connectionString);

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
    const dns = require('dns'); 
  
// dns.lookup() function searches 
// for user IP address and family 
// if there is no error  
    res.status(200).json({hello:"homePAge"});

});

app.listen(PORT,()=>{
    console.log("Server Runnin on PORT:",PORT);
})