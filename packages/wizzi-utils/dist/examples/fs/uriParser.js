/*
    artifact generator: C:\My\wizzi\wizzi\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi\packages\wizzi-utils\.wizzi\ittf\examples\fs\uriParser.js.ittf
*/
'use strict';
var path = require('path');
var uriParser = require('../../lib/fs/uriParser');
parse('\\tmp\\stefi\\wizzi\\index.js.ittf');
parse('/tmp/stefi/wizzi/index.js.ittf');
parse('c:\\stefi\\wizzi\\index.js.ittf');
parse('db:\\stefi\\wizzi\\index.js.ittf');
parse('ls:\\stefi\\wizzi\\index.js.ittf');
parse('c:/stefi/wizzi/index.js.ittf');
parse('db:/stefi/wizzi/index.js.ittf');
parse('ls:/stefi/wizzi/index.js.ittf');
parse('c://stefi/wizzi/index.js.ittf');
parse('db://stefi/wizzi/index.js.ittf');
parse('ls://stefi/wizzi/index.js.ittf');
function parse(uri) {
    var parsed = uriParser(uri);
    console.log(uri, '\n', path.dirname(uri), '\n', JSON.stringify(parsed, null, 2));
}
