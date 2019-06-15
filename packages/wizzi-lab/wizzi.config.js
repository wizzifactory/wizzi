const path = require('path');
module.exports = {
    wfjobName: "wizzi-lab-job",
    wfjobPath: path.join(__dirname, '.wizzi', 'generate.wfjob.ittf'), 
    destPath: path.join(__dirname, 'dist'),
    plugins: [
        'wizzi-core', 
        'wizzi-js', 
        'wizzi-web'
    ], 
    schemas: [
        'temp',
        'raml',
        'rdbms',
    ],
    globalContext: {
        isPackageDeploy: true,
        isDevelopment: false,
    },
};