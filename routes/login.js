var express=require("express");
var router=express.Router();
const axios = require('axios');



router.get("/",(req,res)=>{
    res.send("server is working ok.")
})

module.exports = router;
