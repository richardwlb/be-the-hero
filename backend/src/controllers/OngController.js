const connection = require('../database/connections');
const generateUniqueId = require('../utils/generateUniqueId');

module.exports = {

    async create(request, response) {

        const { name, email, whatsapp, city, uf } = request.body;
        const id = generateUniqueId.generate();
    
        await connection('ongs').insert({
            id, 
            name,
            email,
            whatsapp,
            city,
            uf
        })
    
        return response.json({id});
    },

    async index(req, res) {
        const ongs = await connection('ongs').select('*');
        return res.json(ongs);
    }


}    