const Mongoose = require ('mongoose'),
	MovieSchema = new Mongoose.Schema({
		Title: String,
		Year: Number,
		Rated: String,
		Released: String,
		Genre: Array,
		Director: String,
		Writer: Array,
		Actors: Array,
		Plot: String,
		Language: String,
		Country: String,
		Awards: String,
		Poster: String,
		Ratings: Array,
		Metascore: String,
		imdbRating: String,
		imdbVotes: String,
		imdbID: String,
		Type: String,
		DVD: String,
		BoxOffice: String,
		Production: String,
		Website: String,
		Response: String,
	});

module.exports = {
	MovieSchema
};