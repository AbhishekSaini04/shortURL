const express=require("express");
const path=require("path");
const app=express();
app.set('trust proxy', true);
const PORT=3000;
require("dotenv").config();

app.set("view engine","ejs");
app.set("views",path.resolve("./views"))
// app.set("views",path.resolve("./"))
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))
const urlRoute=require("./routes/urlRoute");
const redirectRoute=require("./routes/redirectingToURL");
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
   res.status(200).render("home");
});

app.listen(PORT,()=>{
    console.log("Server Runnin on PORT:",PORT);
})