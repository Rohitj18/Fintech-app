const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");


//routes
const userRoutes = require("./routes/User");
const expenseRoutes = require("./routes/Expense");
const walletRoutes = require("./routes/Wallet");
const stockRoutes = require("./routes/Stocks");
// const ApiRoutes = require("./routes/API");

const database = require("./config/database");
const cors = require("cors");
const {cloudinaryConnect} = require("./config/cloudinary");

require("dotenv").config();
const PORT = process.env.PORT || 4000;

//database connect
database.connect();

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin:"*",
        credentials:true,
    })
);

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader("Access-Control-Allow-Methods","PUT, POST, GET, DELETE, PATCH, OPTIONS");
    next();
});

app.use(
    fileUpload({
        useTempFiles:true,
        tempFileDir:"/tmp",
    })
);

// cloudinary connection
cloudinaryConnect();

//routes
app.use("/api/v1/auth",userRoutes);
app.use("/api/v1/auth",expenseRoutes);
app.use("/api/v1/auth",walletRoutes);
app.use("/api/v1/auth",stockRoutes);

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
