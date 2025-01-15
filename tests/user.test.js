const request = require('supertest');
const app = require('../src/app');
const { User } = require('../src/models');

describe('User API', () => {
  beforeAll(async () => {
    await User.sync({ force: true });
  });

  it('should create a new user', async () => {
    const res = await request(app).post('/api/register').send({
      name: 'John',
      email: 'john@example.com',
      password: 'password123',
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
  });
});
