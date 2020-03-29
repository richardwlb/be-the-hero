const uniqueId = require('../../src/utils/generateUniqueId');

describe( 'Generate Unique ID', () => {
    it('should generate an unique ID', () => {
        expect(uniqueId.generate()).toHaveLength(8);  
    })
})