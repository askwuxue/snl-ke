const cracoALias = require('craco-alias');
const path = require('path');
const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: cracoALias,
            options: {
                aliases: {
                    '@': path.resolve(__dirname, 'src/models')
                }
            }
        },
        {
            plugin: CracoLessPlugin
        }
    ]
}