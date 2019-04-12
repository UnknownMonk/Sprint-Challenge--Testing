const express = require('express');
const cors = require('cors');

const games = require('../games/gamesModell');

const server = express();

server.use(cors());
server.use(express.json());

server.get('/', async (req, res) => {
  res.status(200).json({ api: 'Its go time' });
});

server.get('/api/games', async (req, res) => {
  const gameList = await games.getAll();

  if (gameList) {
    res.status(200).json(gameList);
  } else {
    return res.status(500).json({ message: 'DO YOU THINK THIS IS A GAME!!' });
  }
});

server.get('/api/games/:id', async (req, res) => {
  try {
    const game = await games.findById(req.params.id);
    if (game) {
      return res.status(200).json(game);
    } else {
      return res.status(404).json({ message: 'No games here ' });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

server.post('/api/games', async (req, res) => {
  try {
    const game = await games.insert(req.body);
    if (game) {
      return res.status(200).json(game);
    } else {
      return res.status(404).json({ message: 'Add a game' });
    }
  } catch (error) {
    return res.status(422).json({ message: 'Could not add a game' });
  }
});

module.exports = server;
