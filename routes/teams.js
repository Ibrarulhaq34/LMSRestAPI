var express = require('express');
var teamController = require("../controllers/team");
const team = require("../models/team");
var router = express.Router();


 router.get('/teams', teamController.view);
 router.post('/teams', teamController.add);
 router.delete('/teams/:teamID', teamController.delete);

module.exports = router;