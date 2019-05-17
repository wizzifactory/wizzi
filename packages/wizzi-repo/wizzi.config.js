const path = require('path');
module.exports = {
    wfjobName: "wizzi-repo-job", 
    wfjobPath: path.join(__dirname, '.wizzi', 'generate.wfjob.ittf'), 
    plugins: [
        'wizzi-core', 
        'wizzi-js', 
        'wizzi-web'
    ], 
    globalContext: {
        isPackageDeploy: true,
        isWebpackTarget: false,
        gctx_useMongo: false,
    },
    globalContext_default: {
        isPackageDeploy: true,
        isWebpackTarget: false,
        gctx_useMongo: false,
    },
    globalContext_webpack: {
        isPackageDeploy: true,
        isWebpackTarget: true,
        gctx_useMongo: false,
    },
};