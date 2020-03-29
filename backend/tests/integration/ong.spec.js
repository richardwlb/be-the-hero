const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connections');

describe('ONG', () => {

    beforeEach( async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    })

    afterAll( async () => {
        await connection.destroy();
    })

    it('should create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "GATOSHELP",
                email: "contato@saem.com.br",
                whatsapp: "4700000000",
                city: "Rio do Sul",
                uf: "SC"
            });

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
        
    })
})