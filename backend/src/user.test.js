/* eslint-disable no-undef */

const request = require('supertest');

describe('User', () => {
    it('get to main route', async () => {
        const response = await request('http://localhost:3000').get('/');
        expect(response.statusCode).toBe(200);
    });
});
