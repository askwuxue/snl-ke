const cracoALias = require('craco-alias');
const path = require('path');

module.exports = {
    plugins: [
        {
            plugin: cracoALias,
            options: {
                aliases: {
                     '@': path.resolve(__dirname, 'src/models')
                }
            }
        }
    ]
}