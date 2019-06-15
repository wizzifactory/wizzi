const path = require('path');
module.exports = {
    wfjobName: "wizzi-git-job", 
    wfjobPath: path.join(__dirname, '.wizzi', 'generate.wfjob.ittf'), 
    plugins: [
        'wizzi-core', 
        'wizzi-js', 
        'wizzi-web'
    ], 
    globalContext: {
        isPackageDeploy: true,
        isWebpackTarget: true,
        isDevelopment: false,
    },
    globalContext_default: {
        isPackageDeploy: true,
        isWebpackTarget: false,
        isDevelopment: false,
    },
    globalContext_webpack: {
        isPackageDeploy: true,
        isWebpackTarget: true,
        isDevelopment: false,
    },
};