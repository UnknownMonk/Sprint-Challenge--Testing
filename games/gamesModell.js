const db = require('../data/dbConfig');

module.exports = {
  insert,
  getAll,
  remove,
  findById
};

async function insert(game) {
  const [id] = await db('games').insert(game);

  return db('games')
    .where({ id })
    .first();
}

function getAll() {
  return db('games');
}

function remove(id) {
  return db('games')
    .where({ id })
    .del();
}

function findById(id) {
  return db('games')
    .where({ id })
    .first();
}
