const express = require('express');
const cors = require('cors');

// const games = require("../games/gamesModel");

const server = express();

server.use(cors());
server.use(express.json());

server.get('/', async (req, res) => {
  res.status(200).json({ api: 'Its go time' });
});

module.exports = server;
