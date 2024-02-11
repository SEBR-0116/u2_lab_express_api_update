const express = require('express');
const mongoose = require('mongoose');
const moviesController = require('./controllers/movies');
const reviewsController = require('./controllers/reviews');
const actorsController = require('./controllers/actors');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})

app.get('/', (req, res) => {
  res.send('Welcome to the Movie Database!');
});

app.get('/movies', moviesController.getAllMovies);

app.get('/movies/:id', moviesController.getMovieDetails)

app.get('/reviews', reviewsController.getAllReviews);

app.get('/actors', actorsController.getAllActors);

// app. get('/moviedetails', moviesController.getMoviesReview)
