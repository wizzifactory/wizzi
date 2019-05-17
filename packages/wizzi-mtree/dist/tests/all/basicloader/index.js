/*
    artifact generator: C:\My\wizzi\wizzi-mono\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-mono\packages\wizzi-mtree\.wizzi\ittf\tests\all\basicloader\index.js.ittf
*/
'use strict';

var path = require('path');
var util = require('util');

var del = require('del');
var expect = require('expect.js');

var _ = require('lodash');
var file = require('wizzi-utils').file;
var verify = require('wizzi-utils').verify;

var loader = require('../../lib/basicloader');

describe("basicloader", function() {
    
    var ittfSource = path.join(__dirname, 'data', 'doc1.tests.ittf');
    
    it("should load an ittfdocument with no frills", function(done) {
        loader.loadMTreeBrick(ittfSource, null, function(err, mTreeBrick) {
            if (err) {
                console.log('err', err);
                throw new Error(err.message);
            }
            expect(mTreeBrick).to.be.an('object');
            expect(mTreeBrick.nodes).to.be.an('array');
            expect(mTreeBrick.nodes.length).to.be(1);
            expect(mTreeBrick.nodes[0].n).to.be.a('string');
            expect(mTreeBrick.nodes[0].n).to.be('tests');
            expect(mTreeBrick.nodes[0].v).to.be.a('string');
            expect(mTreeBrick.nodes[0].v).to.be('School');
            done();
        });
    });
});
