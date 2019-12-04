# MoviesAPI

In order to run this project, run npm install, and fill .env file with your credentials ;)

Since there's no Docker (yet), I've used Node v13.2.0
In order to post new movie in the database you have to send POST with Title in body.
To get movies from database just run GET for the url of movies.
In order to create comment run POST and fill body with following properties (those aren't necessary as for now): Title, Content, Name. To get all the comments, just run GET with url of comments ;)
