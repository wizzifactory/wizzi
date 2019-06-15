/*
    artifact generator: C:\My\wizzi\wizzi\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi\packages\wizzi-cli\.wizzi\ittf\cmds\fy.js.ittf
*/
'use strict';
const path = require('path');
const fs = require('fs');
const wizziUtils = require('wizzi-utils');
const file = wizziUtils.file;
const wizziTools = require('wizzi-tools');
const help = require('./help');
module.exports = (args) => {
    let currentDir = process.cwd();
    let source = args.source || args.s;
    let dest = args.dest || args.d;
    console.log('fy.source.dest', source, dest);
    if (source && source.length > 0) {
        const sourcePath = path.join(currentDir, source);
        if (dest && dest.length > 0) {
            const destPath = path.join(currentDir, dest);
            if (file.isDirectory(sourcePath)) {
                console.log('ok. source && dest are folders');
                wizziTools.importFolder(sourcePath, destPath, (err, result) => {
                    if (err) {
                        console.log('err', err);
                        throw new Error(err.message);
                    }
                    console.log('Wizzify folder result', result);
                });
            }
            else if (file.isFile(sourcePath)) {
                console.log('ok. source && dest are files');
                wizziTools.wizzify(file.read(sourcePath), (err, result) => {
                    if (err) {
                        console.log('err', err);
                        throw new Error(err.message);
                    }
                    file.write(destPath, result);
                    console.log('Wizzify file', result);
                });
            }
            else {
                console.log('error. source and dest must be both folders or both files');
                help({_:['help', 'fy']});
            }
        }
        else {
            if (file.isFile(sourcePath)) {
                console.log('ok. source is file && dest will be calculated from source');
                wizziTools.wizzify(file.read(sourcePath), (err, result) => {
                    if (err) {
                        console.log('err', err);
                        throw new Error(err.message);
                    }
                    file.write(sourcePath + '.ittf', result);
                    console.log('Wizzify file', result);
                });
            }
            else {
                console.log('error. if dest is missing source must be a file');
                help({_:['help', 'fy']});
            }
        }
    }
    else {
        console.log('Invalid options for `fy` command.');
        help({_:['help', 'fy']});
    }
};
