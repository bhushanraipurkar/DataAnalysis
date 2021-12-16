const express = require("express");
const app = express();
require("dotenv").config();

require("./Connection/conn");

app.use(require("./Routes/router"));

app.get("/",(req,res)=>{
    res.send("working fine");
})

app.listen(process.env.PORT,()=>console.log(`app is running on port ${process.env.PORT}`));