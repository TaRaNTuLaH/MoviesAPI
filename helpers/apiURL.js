require('dotenv').config({path: '../.env'});

const url = `http://www.omdbapi.com/?apikey=${process.env.API_KEY}`;

module.exports = {
	url
};