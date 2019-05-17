const path = require('path');
module.exports = {
    wfjobName: "wizzi-web-job", 
    wfjobPath: path.join(__dirname, '.wizzi', 'generate.wfjob.ittf'), 
    destPath: path.join(__dirname, 'dist'),
    plugins: [
        'wizzi-core', 
        'wizzi-js', 
        'wizzi-web'
    ], 
    schemas: [
        'html',
        'css',
        'scss',
        'svg',
        'md',
        'graphql',
        'site',
        'vtt',
        'vue',
    ],
    globalContext: {
        isPackageDeploy: true,
    },
};