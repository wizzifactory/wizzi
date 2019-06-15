/*
    artifact generator: C:\My\wizzi\wizzi\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi\packages\wizzi\.wizzi\ittf\lib\production\options.js.ittf
*/
'use strict';
var _ = require('lodash');
var verify = require('wizzi-utils').verify;
module.exports = function(userdefaults, genoptions) {
    return _.merge({
            isDebug: false, 
            CRLF: '\n', 
            indentSpaces: 4, 
            dotgExtensionPrefix: false, 
            dumps: {}
        }, userdefaults || {}, genoptions || {});
};
