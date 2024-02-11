const Movies = require('../models/movies')
const Reviews = require('../models/reviews')
const Actors = require('../models/actors')

const getAllMovies = async (req, res) => {
  try {
    const movies = await Movies.find();
    res.json(movies)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getMovieDetails = async (req, res) => {
  try {
    const movieId = req.params.id
    const movie = await Movies.findById(movieId)

    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' })
    }
    // attaches reviews and actors to the result when displayed
    const reviews = await Reviews.find({ movie_id: movieId })
    const actors = await Actors.find({ movie_id: movieId })

    const movieDetails = {
      movie,
      reviews,
      actors,
    }

    res.json(movieDetails)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}


module.exports = {
  getAllMovies,
  getMovieDetails
}