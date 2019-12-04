const {App} = require ('../server/server'),
	BodyParser = require('body-parser');

App.use(BodyParser.json());
