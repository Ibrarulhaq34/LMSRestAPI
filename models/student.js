var mongoose = require("mongoose");

var studentSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	}, 
	rollno: {
		type: String,
		required: true
	}
});
module.exports = mongoose.model('Student', studentSchema);
