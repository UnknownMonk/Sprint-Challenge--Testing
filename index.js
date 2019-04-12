require('dotenv').config();

const server = require('./api/server.js');

const port = process.env.PORT || 5000;
server.listen(port, () =>
  console.log(`\n** It is so hard to say good bye on port ${port} **\n`)
);
