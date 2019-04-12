const request = require('supertest');
const server = require('./server');

describe('server.js', () => {
  describe('Get /api/games', () => {
    it('should return 200 OK', async () => {
      const res = await request(server).get('/api/games');

      expect(res.status).toBe(200);
    });

    it('should return an array of games', async () => {
      const res = await request(server).get('/api/games');

      expect(res.type).toBe('application/json');
    });

    it('should return added game', async () => {
      const res = await request(server).get('/api/games/1');

      expect(res.text).toContain('Pacman');
    });
  });

  describe('POST /api/games', () => {
    it('should return 200 OK', async () => {
      const body = { title: 'cool', genre: 'test', releaseYear: 2000 };
      const res = await request(server)
        .post('/api/games')
        .send(body);

      expect(res.status).toBe(200);
    });

    it('should return a 422 if the info is incomplete', async () => {
      const body = { title: 'bad test', releaseYear: 2100 };
      const res = await request(server)
        .post('/api/games')
        .send(body);

      expect(res.status).toBe(422);
    });

    it('should post the game that it is sent', async () => {
      const body = { title: 'postMe', genre: 'please', releaseYear: 1900 };
      const res = await request(server)
        .post('/api/games')
        .send(body);

      expect(res.body.title).toContain('postMe');
    });
  });
});
