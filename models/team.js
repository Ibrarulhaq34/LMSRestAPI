var mongoose = require("mongoose");

var TeamScheme = mongoose.Schema({
	teamName: {
		type: String,
		required: true
	}, 
	teamID: {
		type: String,
		required: true
	}
});
module.exports = mongoose.model('team', TeamScheme);
