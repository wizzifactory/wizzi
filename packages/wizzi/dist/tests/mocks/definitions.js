/*
    artifact generator: C:\My\wizzi\wizzi\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi\packages\wizzi\.wizzi\ittf\tests\mocks\definitions.js.ittf
*/
'use strict';
var md = module.exports = {};
md.getSchemaDefinition = function(schemaName) {
    if (schemaName === 'tests') {
        return {
                name: 'tests'
            };
    }
    else {
        return null;
    }
};
