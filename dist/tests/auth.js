const supertest = require('supertest');
describe('Test login', () => {
    let secret = null;
    beforeAll(async (done) => {
        const loginAluno = await supertest(strapi.server.httpServer)
            .post('/api/auth/validate-access')
            .send({
            identifier: 'aluno@strapi.com',
            password: '123456',
        });
        secret = loginAluno.body.secret;
        done();
    });
    it('Identifier and password required login.', async () => {
        const request = supertest(strapi.server.httpServer);
        const response = await request.post('/api/auth/validate-access').send({});
        const error = response.body.error.details.errors.map((el) => el.path[0]);
        const keysRequired = ['identifier', 'password'];
        keysRequired.map((key) => {
            expect(error).toContain(key);
        });
    });
    it('Correct username and password returns secret.', async () => {
        const request = supertest(strapi.server.httpServer);
        const response = await request.post('/api/auth/validate-access').send({
            identifier: 'admin@strapi.com',
            password: '123456',
        });
        expect(response.body.secret).toBeDefined();
    });
    it('Returns message "Invalid identifier or password" if password or email is incorrect.', async () => {
        const request = supertest(strapi.server.httpServer);
        const response = await request.post('/api/auth/validate-access').send({
            identifier: 'professor@strapi.com',
            password: '000212',
        });
        const messageError = response.body.error.message;
        expect(messageError).toContain('Invalid identifier or password');
    });
});
