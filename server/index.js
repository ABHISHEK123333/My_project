require('dotenv').config();
const express =require("express");
const app=express();
const cors=require("cors");
const path =require('path');
const { Dir } = require('fs');
require("./connection/db.js");
app.use(cors());

app.use(express.json());

app.use("/api",require("./route/router.js"));
app.use("/api",require("./route/Orderdata.js"));
app.use("/api",require("./route/Myorder.js"));
const port=process.env.PORT||5000;
app.listen(port,()=>{
    console.log(`server is ruuning at port ${port}`);
})