exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('games')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('games').insert([
        { title: 'Pacman', genre: 'Arcade', releaseYear: '1980' },
        { title: 'halo', genre: 'console', releaseYear: '2008' },
        { title: 'Pong', genre: 'Arcade', releaseYear: '1979' }
      ]);
    });
};
