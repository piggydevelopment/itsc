const { defaultInjectConfig, InjectManifest } = require('workbox-webpack-plugin');
const path = require('path');

module.exports = function override(config, env) {
    const workboxConfig = {
        ...defaultInjectConfig,
        swSrc: path.join(__dirname, 'public', 'service-worker.js'),
        swDest: 'service-worker.js',
    };
    config.plugins.push(new InjectManifest(workboxConfig));
    return config;
}