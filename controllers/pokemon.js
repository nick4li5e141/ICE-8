const PokemonModel = require('../moduls/pokemon');

async function getMyCollection(req, res) {
    try {
      const myCollection = await Pokemon.find({});
      res.render("mySavedCollection.ejs", { myCollection });
    } catch (err) {
      console.err("Error with getting saved collection");
      res.status(500).send("Error in getting saved collection");
    }
  }