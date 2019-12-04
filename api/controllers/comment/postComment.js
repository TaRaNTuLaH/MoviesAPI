const {CommentSchema} = require('../../../database/models/comment'),
	Mongoose = require ('mongoose');

let Comment = Mongoose.model('Comment', CommentSchema);

function PostComment(req, res) {
	let newComment = new Comment(req.body);
	newComment.save((err, comment) => {
		res.send(comment);
	});
}

module.exports = {
	PostComment
};
