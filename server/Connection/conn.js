const mongoose = require("mongoose");

mongoose.connect(process.env.Mongo_Uri,({
    // useCreateIndex:true,
    // useNewUrlParser:true,
    // useUnifiedTopology:true,
    //useFindAndModify:false
})).then(()=>{
    console.log("successfully connected with Atlas");
})
.catch((err)=>{
    console.log(err);
});