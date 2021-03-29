'use strict';
const superTest = require('supertest');
const server = require('../src/server');
const request = superTest(server.app);

describe('Server', () => {
  it('handle server errors', async () => {
    const response = await request.get('/person');
    expect(response.status).toEqual(500);
  });
  it('handle working routes', async () => {
    const response = await request.get('/person').query({name:'bayan'});
    expect(response.status).toEqual(200);
    expect(response.body).toEqual({name:'bayan'});
  });
});