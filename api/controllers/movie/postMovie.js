const {RetrieveInformation} = require('../../../service/omdb'),
	Mongoose = require ('mongoose'),
	{MovieSchema} = require ('../../../database/models/movie');

let Movie = Mongoose.model('Movie', MovieSchema);

function PostMovie(req, res) {

	if (!req.body.Title) {
		return res.send('It seems like title of the movie is missing ;)');
	}

	RetrieveInformation(req.body.Title).then(data => {

		const movie = data.data;
		let newMovie = new Movie(movie);

		if (movie.Response === 'False') return res.send('No such movie in OMDB :(');

		newMovie.save((err, movie) => {
			if (err) return res.send(err);
			res.send(movie);
		});
	});
}

module.exports = {
	PostMovie
};