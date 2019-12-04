const {App} = require ('../../server/server'),
	{GetComment} = require ('../../api/controllers/comment/getComment'),
	{PostComment} = require('../../api/controllers/comment/postComment');

App.get('/comments', GetComment);
App.post('/comments', PostComment);
