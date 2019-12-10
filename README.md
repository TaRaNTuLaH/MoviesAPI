# MoviesAPI

In order to run this project, run npm install, and fill .env file with your credentials ;)

App is visible under following URL: https://moviesapitarantulah.herokuapp.com

You can POST/GET movies, and comments. In order to create new entity in database, simply send POST request under /movies endpoint and fill body with "Title":"Name of the Movie", to get movies just hit GET request under /movies endpoint ;) 

For the comments proceed as above, but fill body with "TitleOfTheMovie", "Content", and "Name" ;)

App has been dockerized, just run docker-compose up and everyting will be good to go ;) 
