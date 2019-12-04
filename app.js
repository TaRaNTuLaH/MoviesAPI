require('dotenv').config({path: './.env'});

require('./middleware/body-parser');

require('./server/server');

require('./routes/controllers/moviesController');

require('./routes/controllers/commentController');