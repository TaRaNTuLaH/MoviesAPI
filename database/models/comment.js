const Mongoose = require ('mongoose'),
	CommentSchema = new Mongoose.Schema({
		TitleOfTheMovie: String,
		Content: String,
		Name: String
	});

module.exports = {
	CommentSchema
};
