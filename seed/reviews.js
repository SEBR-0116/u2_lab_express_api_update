
const db = require('../db')
const Reviews = require('../models/reviews')
const Movies = require('../models/movies')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

  const blackClover = await Movies.find({title: 'Black Clover: Sword of the Wizard King'})
  const demonSlayer = await Movies.find({title: 'Demon Slayer: Kimetsu no Yaiba - The Movie: Mugen Train'})
  const interstellar = await Movies.find({title: 'Interstellar'})
  const theMartian = await Movies.find({title: 'The Martian'})
  const nowYouSeeMe = await Movies.find({title: 'Now You See Me'})

  const reviews = [
    {
      score: '7.4 from IMDb',
      comment: `Black Clover is finally receiving the fantastic animation that it deserves! I've missed these characters being on my screen and the music is perfect! The fights were incredible and the voice acting was top notch! Everyone brought their A game for their performance with a few stand outs like Noelle's VA. If I had to have a single negative about the film it's that I wished it was longer so we could spend more time fleshing out the villains but with the time we're giving they serve their purpose and we get an understanding of their motivation. If you love Black Clover and haven't watched the film yet go watch it now! Oh and if you've already watched it go watch it again!`,
      movie_id: blackClover[0]._id,
    },
    {
      score: '8.2 from IMDb',
      comment: `I read the manga so I knew what would happen but seeing it animated just brought another level of heartbreak to me. With the amazing animation and background music, I was engrossed in this movie. Also, the final fight scene between Rengoku and the Upper Rank Three demon was probably one of the best fight scenes I've watched so far. Granted, I haven't watched many fight scenes. Still, it was such a pleasure to watch.`,
      movie_id: demonSlayer[0]._id,
    },
    {
      score: '8.7 from IMDb',
      comment: `A science-fiction masterpiece. Nolan executes a marvelous direction that slowly but efficiently puts in place a dark world creating a necessity to save humanity. Add to that great performances from Nolan and Hathaway plus a great score from Hans Zimmer. The result is on the best science-fiction movies of all time.`,
      movie_id: interstellar[0]._id,
    },
    {
      score: '8.0 from IMDb',
      comment: `This is a rare, light-hearted science fiction film that deliberately downplays the most common fears about the future and the unknown universe, focusing instead on human effort and the science that can save humanity.The film has a tech-geek's idiocy and optimism. (Matt Damon, of course, did it perfectly.)Even if the movie is a little bit stereotypical in its emotional setting, it can still touch the audience at crucial moments.`,
      movie_id: theMartian[0]._id,
    },
    {
      score: '7.2 from IMDb',
      comment: `I absolutely love this film. "Now You See Me" is like nothing I've ever seen before. "Now You See Me" tells the story of a group of magicians called The Four Horsemen who use their skills to pull off some of the greatest international robberies of their generation. Featuring Daniel Atlas (Jesse Eisenberg), Merritt McKenny (Woody Harrelson), Henley Reeves (Isla Fisher) and Jack Wilder (Dave Franco), the Four Horsemen make a dream team of street magicians. Since they have made their stunts public, allowing the world to "witness" the robberies, authorities are in hot pursuit of the four, now wanted criminals. Detective Rhodes (Mark Ruffalo) is accompanied in his search for the illusive magicians by Thaddeus Bradley (Morgan Freeman) and French detective Alma Dray (Melanie Laurent). Will the Four Horsemen be able to pull of their final act without being caught, or will it be curtains for the criminal performers?`,
      movie_id: nowYouSeeMe[0]._id,
    },
  ]

  await Reviews.insertMany(reviews)
  console.log('Created actors')
  
}

const run = async () => {
  await main()
    db.close()
}

run()