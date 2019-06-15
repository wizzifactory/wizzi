/*
    artifact generator: C:\My\wizzi\wizzi\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi\packages\wizzi-cli\.wizzi\ittf\cmds\help.js.ittf
*/
'use strict';
const menus = {
    main: [
        "wizzi [noarguments] | [command] <options>", 
        "", 
        "noarguments ......... execute generation using wizzi.config.js", 
        "create .............. setup wizzi for the current project", 
        "fy .................. wizzify a file or folder", 
        "version ............. show package version", 
        "help ................ show help menu for a command"
    ].join('\n'), 
    create: [
        "wizzi create <options>", 
        "", 
        "--kind | -k ........... the project kind"
    ].join('\n'), 
    fy: [
        "wizzi fy <options>", 
        "", 
        "--source | -s ........... the source file or folder", 
        "--dest | -d ............. the destination file or folder"
    ].join('\n')
};
module.exports = (args) => {
    const subCmd = args._[0] === 'help' ? args._[1] : args._[0];
    console.log(menus[subCmd] || menus.main);
};
