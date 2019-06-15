/*
    artifact generator: C:\My\wizzi\wizzi\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi\packages\wizzi-utils\.wizzi\ittf\tests\scanner\scanner.js.ittf
*/
'use strict';

var path = require('path');
var util = require('util');

var expect = require('expect.js');
var folderScanner = require('../../lib/scanners/folderScanner');
var root;

describe("the folderScanner module", function() {
    
    it("should scan a folder", function() {
        var ittfMTreeEx = folderScanner.scan(path.join(__dirname, 'ittf', 'first'), {
            name: 'first', 
            gitPath: 'c:/blabla'
        });
        expect(ittfMTreeEx).to.be.an('object');
        ittfMTreeEx.writeFile(path.join(__dirname, 'outputs', 'first.wfpackage.ittf'), function(err, result) {
            if (err) {
                console.log('err', err);
                throw new Error(err.message);
            }
            console.log('err, result', err, result);
        });
    });
});
