const Actors = require('../models/actors')

const getAllActors = async (req, res) => {
  try {
    const actors = await Actors.find()
    res.json(actors)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

module.exports = {
  getAllActors,
}