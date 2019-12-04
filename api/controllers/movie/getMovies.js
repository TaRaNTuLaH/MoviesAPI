const {MovieSchema} = require ('../../../database/models/movie'),
	Mongoose = require ('mongoose');

let Movies = Mongoose.model('Movies', MovieSchema);

function GetMovies(req, res) {

	Movies.find({}, (err, movies) => {

		if (err) return res.send('Something went wrong!');

		if (!movies.length) return res.send('No movies in database');

		res.send(movies);
	});
}

module.exports = {
	GetMovies
};