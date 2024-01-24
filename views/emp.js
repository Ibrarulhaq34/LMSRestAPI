var express=require("express")
var router = express.Router();
var mongoose = require("mongoose")
var Student = require('../models/student');



router.get('/',function(req,res,next){
    res.send("Dash board")
})
// module.exports.dashboard = function (req, res, next) {
//     res.send("Dashboard of Students.");
// };

router.get('/emp',function(req,res,next){
    res.send("list of student")
})

module.exports = router;