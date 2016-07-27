//grab the packages that we need for the todo model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// user schema
var TodoSchema = new Schema({
	task: {
		type: String,
		required: true
	}
});

// return the model
module.exports = mongoose.model('Todo', TodoSchema);