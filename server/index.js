const express = require("express");
const app = express();

const userRoutes = require("./routes/User");
const expenseRoutes = require("./routes/Expense");

const database = require("./config/database");
const cookieParser = require("cookie-parser");
// const cors = require("cors");
// const {cloudinaryConnect} = require("./config/cloudinary");
const fileUpload = require("express-fileupload");
require("dotenv").config({path:require('find-config')('.env')});
const PORT = process.env.PORT || 4000;

//database connect
database.connect();

//middleware
app.use(express.json());
app.use(cookieParser());
// app.use(
//     cors({
//         origin:"http://localhost:3000",
//         credentials:true,
//     })
// );

app.use(
    fileUpload({
        useTempFiles:true,
        tempFileDir:"/tmp",
    })
);

//cloudinary connection
// cloudinaryConnect();

//routes
app.use("/api/v1/auth",userRoutes);
app.use("/api/v1/auth",expenseRoutes);
//get routes

app.get("/",(req,res)=>{
    return res.json({
        success:true,
        message:"you server is up and running",
    })
});

app.listen(PORT,()=>{
    console.log(`app is running at port ${PORT}`);
})