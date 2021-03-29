'use strict';
const superTest = require('supertest');
const server = require('../src/server');
const request = superTest(server.app);

describe('Server', () => {
  it('handle invalid routes', async () => {
    const response = await request.get('/foo');
    expect(response.status).toEqual(404);
  });
  it('handle method errors', async () => {
    const response = await request.post('/person').query({name:'bayan'});
    expect(response.status).toEqual(404);
  });
});