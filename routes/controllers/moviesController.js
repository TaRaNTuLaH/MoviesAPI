const {App} = require ('../../server/server'),
	{GetMovies} = require ('../../api/controllers/movie/getMovies'),
	{PostMovie} = require('../../api/controllers/movie/postMovie');

App.get('/movies', GetMovies);
App.post('/movies', PostMovie);
