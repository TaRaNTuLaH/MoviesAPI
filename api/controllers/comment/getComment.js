const {CommentSchema} = require('../../../database/models/comment'),
	Mongoose = require ('mongoose');

let Comment = Mongoose.model('Comment', CommentSchema);

function GetComment(req, res) {
	Comment.find({}, (err, comment) => {
		res.send(comment);
	});
}

module.exports = {
	GetComment
};
