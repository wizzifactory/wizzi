/*
    artifact generator: C:\My\wizzi\wizzi\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi\packages\wizzi-utils\.wizzi\ittf\examples\utils\verify.js.ittf
*/
'use strict';

var util = require('util');
var path = require('path');
var stringify = require('json-stringify-safe');
var file = require('../../lib/fs/file');
var vfile = require('../../lib/fs/vfile');
var fsGit = require('../../lib/fs/fsGit');
var verify = require('../../lib/verify');
var lorem = require('../../lib/lorem');
var encdec = require('../../lib/crypto/encdec');


var nv = verify.parseNameValue("['@id'] this.id", null, {
    objectProperty: true
});
console.log('verify.parseNameValue', nv);
nv = verify.parseNameValue("['@id'] this.id");
console.log('verify.parseNameValue', nv);
