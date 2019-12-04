const Axios = require('axios'),
	{url} = require ('../helpers/apiURL');

function RetrieveInformation(query) {
	return Axios.get(`${url}&t=${query}`);
}

module.exports = {
	RetrieveInformation
};