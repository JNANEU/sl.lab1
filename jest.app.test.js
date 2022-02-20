const app = require('./server');
const supertest = require('supertest');
const request = supertest(app);

it('gets the test endpoint', async () => {
    const response = await request.get('/');
    expect(response.text).toBe('Hello world!');
    return 0;
});

