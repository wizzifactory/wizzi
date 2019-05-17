/*
    artifact generator: C:\My\wizzi\wizzi-mono\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-mono\packages\wizzi\.wizzi\ittf\examples\light\index_json.js.ittf
*/
'use strict';
var path = require('path');
var stringify = require('json-stringify-safe');
var wizzi = require('../../index');
var jsIttf = [
    'module', 
    '\tkind react', 
    '\treact MyComponent'
].join('\n');
wizzi.genFromText(jsIttf, {}, {
    artifactName: 'js/module'
}, function(err, artifactText) {
    if (err) {
        return callback(err);
    }
    console.log('genFromText', '\n', artifactText);
});
