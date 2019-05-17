/*
    artifact generator: C:\My\wizzi\wizzi-mono\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-mono\packages\wizzi-mtree\.wizzi\ittf\tests\all\loader\loadContext.js.ittf
*/
'use strict';

var path = require('path');
var util = require('util');

var del = require('del');
var expect = require('expect.js');

var _ = require('lodash');
var file = require('wizzi-utils').file;
var verify = require('wizzi-utils').verify;

var LoadHistory = require('../../lib/loader/loadHistory').LoadHistory;

describe("loadContext", function() {
    var loadHistory;
    it("adding a source IttfDocument to the loadHistory should return a key for retreaving the uri", function() {
        loadHistory = new LoadHistory();
        var content_filepath = path.join(__dirname, 'repo', 'data', 'lexer_1.tests.ittf');
        var sourceData = loadHistory.addIttfDocument(content_filepath, {});
        var uri = loadHistory.getIttfDocumentUri(sourceData.sourceKey);
        expect(sourceData.sourceKey).to.be.a('string');
        expect(sourceData.sourceKey).to.be('f1');
        expect(uri).to.be(content_filepath);
    });
});
