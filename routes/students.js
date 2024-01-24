var express = require('express');
var studentController= require("../controllers/student");
const student = require("../models/student");
var router = express.Router();

router.get('/', studentController.dashboard);
router.get('/students', studentController.view);
router.get('/students/:name', studentController.viewOne);
router.post('/students', studentController.add);
router.put('/students', studentController.update);
router.delete('/students/:rollno', studentController.delete);

module.exports = router;