const crypto = require('crypto');

module.exports = {

    generate() {
        return(
            crypto.randomBytes(4).toString('HEX')
        )
    }

}

// OR... SAME THING
// export default function generate() {
//     return(
//         crypto.randomBytes(4).toString('HEX')
//     )
// }