const Reviews = require('../models/reviews');

const getAllReviews = async (req, res) => {
  try {
    const reviews = await Reviews.find();
    res.json(reviews);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getAllReviews,
};