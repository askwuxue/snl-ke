const cracoALias = require('craco-alias');
const path = require('path');

module.exports = {
    plugins: [
        {
            plugin: cracoALias,
            options: {
                alias: {
                     '@': path.resolve(__dirname, 'src')
                }
            }
        }
    ]
}