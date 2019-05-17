const path = require('path');
module.exports = {
    wfjobName: "wizzi-meta-job", 
    wfjobPath: path.join(__dirname, '.wizzi', 'generate.wfjob.ittf'), 
    destPath: path.join(__dirname, 'dist'),
    plugins: [
        'wizzi-core', 
        'wizzi-js', 
        'wizzi-web'
    ], 
    schemas: [
        'wfsystem',
        'wfpackage',
        'wfstudio',
        'docs'
    ],
    globalContext: {
        isPackageDeploy: true,
    },
};