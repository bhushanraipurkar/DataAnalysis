const express = require("express");
const router = express.Router();
const Data = require("../model/model");

router.get("/second",(req,res)=>{
    res.send("second page activated.");
    
});

router.get("/allcompanies",(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    Data.find((err,docs)=>{
        if(!err) res.send(docs)
        else {
            console.log('error : '+JSON.stringify(err,undefined,2))
            return res.status(401).json({Error:"not Found"});
        }
    })
});

 router.get("/allcompanies/sortbycountry/:country",async (req,res)=>{
  try {
     const resp = req.params.country;
      await Data.find({country:resp},(err,docs)=>{
         if(!err) {
               return res.status(200).json(docs);
         }
          else {
              console.log('error : '+JSON.stringify(err,undefined,2))
              return res.status(401).json({Error:"not Found"});
          } 
      })
  } catch (e) {
      console.log(e);
  }
 });

 router.get("/allcompanies/sort/:country/:pestle",async (req,res)=>{
    try {
       const resp = req.params.country;
       const title = req.params.pestle;
        await Data.find({country:resp,pestle:title},(err,docs)=>{
           if(!err) {
                 return res.status(200).json(docs);
           }
            else {
                console.log('error : '+JSON.stringify(err,undefined,2))
                return res.status(401).json({Error:"not Found"});
            } 
        })
    } catch (e) {
        console.log(e);
    }
   });


   router.get("/allcompanies/sortbypestle/:pestle",async (req,res)=>{
    try {
       const title = req.params.pestle;
        await Data.find({pestle:title},(err,docs)=>{
           if(!err) {
                 return res.status(200).json(docs);
           }
            else {
                console.log('error : '+JSON.stringify(err,undefined,2))
                return res.status(401).json({Error:"not Found"});
            } 
        })
    } catch (e) {
        console.log(e);
    }
   });



   router.get("/allcompanies/count/:pestle",async (req,res)=>{
       const resp = req.params.pestle;
    try {
        const num = await Data.find({pestle:resp}).count();
        res.status(200).json({num});
    } catch (e) {
        console.log(e);
    }
   });

   router.get("/allcompanies/count/country/:country",async (req,res)=>{
    const resp = req.params.country;
 try {
     const num = await Data.find({country:resp}).count();
     res.status(200).json({num});
 } catch (e) {
     console.log(e);
 }
});



   



module.exports = router;