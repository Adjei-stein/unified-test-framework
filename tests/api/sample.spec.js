const axios = require('axios');
const { expect } = require('chai');
const { baseURL } = require('../../config/api.config');

describe('API Tests', () => {
  it('should get a list of users', async () => {
    const response = await axios.get(`${baseURL}/users`);
    expect(response.status).to.equal(200);
    expect(response.data).to.be.an('array');
  });
});