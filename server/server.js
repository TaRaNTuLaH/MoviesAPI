const Express = require('express'),
	App = Express(),
	BodyParser = require('body-parser'),
	Mongoose = require ('mongoose');

App.use(BodyParser.json());
App.listen(process.env.PORT || 3000, process.env.LOCAL_IP_ADDRESS || '127.0.0.1');
Mongoose.connect(process.env.DATABASE, {useNewUrlParser: true}).then(() => console.log('Connected'));

module.exports = {
	App
};
