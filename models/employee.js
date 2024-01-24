var mongoose = require("mongoose");

var EmployeeScheme = mongoose.Schema({
	name: {
		type: String,
		required: true
	}, 
	EmployeeID: {
		type: String,
		required: true
	}
});
module.exports = mongoose.model('employee', EmployeeScheme);
