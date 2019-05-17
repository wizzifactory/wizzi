/*
    artifact generator: C:\My\wizzi\wizzi-mono\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-mono\packages\wizzi-cli\.wizzi\ittf\root\index.js.ittf
*/
'use strict';
const minimist = require('minimist');
const error = require('./utils/error');
module.exports = () => {
    const args = minimist(process.argv.slice(2));
    console.log('args', args);
    let cmd = args._[0] || 'generate';
    if (args.version || args.v) {
        cmd = 'version';
    }
    if (args.help || args.h) {
        cmd = 'help';
    }
    console.log('cmd', cmd);
    switch (cmd) {
        case 'generate': {
            require('./cmds/generate')();
            break;
        }
        case 'create': {
            require('./cmds/create')(args);
            break;
        }
        case 'fy': {
            require('./cmds/fy')(args);
            break;
        }
        case 'help': {
            require('./cmds/help');
            break;
        }
        case '?': {
            require('./cmds/help');
            break;
        }
        default: {
            error(`"${cmd}" is not a valid command!`);
            error(`try wizzi help`, true);
            break;
        }
    }
};
