var express = require('express');
var employeeController = require("../controllers/employee");
const student = require("../models/employee");
var router = express.Router();

// router.get('/', studentController.dashboard);
 router.get('/employees', employeeController.view);
// router.get('/students/:name', studentController.viewOne);
 router.post('/employees', employeeController.add);
 router.get('/employees/:EmployeeID', employeeController.viewOne);
router.put('/employees/:EmployeeID', employeeController.update);
// router.delete('/students/:rollno', studentController.delete);


module.exports = router;