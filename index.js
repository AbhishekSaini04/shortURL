const {restrictUserToLoggedIn, checkAuth}=require("./middlewares/auth")
const cookieParser=require("cookie-parser");
const express=require("express");
const app=express();
const path=require("path");
app.set('trust proxy', true);
require("dotenv").config();


// app settings
app.set("view engine","ejs");
app.set("views",path.resolve("./views"))
// app.set("views",path.resolve("./"))
// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))

// routes requiring
const urlRoute=require("./routes/urlRoute");
const redirectRoute=require("./routes/redirectingToURL");
const userRoute=require("./routes/user");
const staticRoute=require("./routes/static");
//declaration
const {shortURLGenerator}=require("./controller/shortURLgenerator");
const {connectToDB}=require("./config");
const {shortURL}=require("./models/shortURLModel");
const connectionString=process.env.MONGODB_ONLINE || process.env.MONGODB_OFFLINE;
const PORT=3000;

//database connection
connectToDB(connectionString);


// routes
app.use("/url",restrictUserToLoggedIn,urlRoute);
app.use("/rd",redirectRoute);
app.use("/",userRoute);
app.use("/",checkAuth,staticRoute);

app.listen(PORT,()=>{
    console.log("Server Runnin on PORT:",PORT);
})