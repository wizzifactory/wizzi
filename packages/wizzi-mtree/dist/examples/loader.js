/*
    artifact generator: C:\My\wizzi\wizzi-mono\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-mono\packages\wizzi-mtree\.wizzi\ittf\examples\loader.js.ittf
*/
'use strict';
var path = require('path');
var vfile = require('wizzi-utils').vfile;
var file = vfile();
var mocks = require('wizzi-utils').mocks;
var repo = mocks.repo;
var packageIndex = require('../index');
vfile(function(err, file) {
    if (err) {
        console.log('err', err);
        throw new Error(err.message);
    }
    step_1(file, function(err, notUsed) {
        if (err) {
            console.log('err', err);
            throw new Error(err.message);
        }
        sample_load(file, 'load_frontmatter.html.ittf', function(err, notUsed) {
            if (err) {
                console.log('err', err);
                throw new Error(err.message);
            }
        });
    });
});
function step_1(file, callback) {
    console.log('EXAMPLE.loader.start');
    var loadMTree = packageIndex.createLoadMTree(repo.getCreateFilesystemStore());
    loadMTree(path.join(__dirname, 'ittf', 'load_compile.html.ittf'), {
        __productionManager: mocks.getProductionManager(), 
        mTreeBuildUpContext: {
            tree: {
                id: 1, 
                title: 'a', 
                children: [
                    {
                        id: 11, 
                        title: 'aa', 
                        children: [
                            
                        ]
                    }
                ]
            }
        }, 
        options: {
            isCompile: true
        }
    }, function(err, mTree) {
        if (err) {
            console.log('err', err);
            throw new Error(err.message);
        }
        console.log("EXAMPLE.loader.mTree.loadHistory", mTree.loadHistory);
        var el = mTree.loadHistory.getIttfDocumentErrorLines('f1', {
            row: 7, 
            col: 19, 
            description: 'could be better'
        }, true);
        console.log("EXAMPLE.loader.mTree.loadHistory.getIttfDocumentErrorLines", el);
        file.write(path.join(__dirname, 'outputs', 'load_compile.html.ittf'), mTree.toIttf());
        callback(null);
    });
}
function sample_load(file, ittfDocumentBasename, callback) {
    console.log('EXAMPLE.loader.sample_load.start', ittfDocumentBasename);
    var loadMTree = packageIndex.createLoadMTree(repo.getCreateFilesystemStore(), {
        frontMatter: true
    });
    loadMTree(path.join(__dirname, 'ittf', ittfDocumentBasename), {
        __productionManager: mocks.getProductionManager(), 
        mTreeBuildUpContext: {
            
        }
    }, function(err, mTree) {
        if (err) {
            console.log('err', err);
            throw new Error(err.message);
        }
        console.log('EXAMPLE.loader.sample_load.result\n', mTree.toIttf());
        console.log('EXAMPLE.loader.sample_load.frontmatter\n', JSON.stringify(mTree.frontMatter, null, 2));
        file.write(path.join(__dirname, 'outputs', ittfDocumentBasename), mTree.toIttf());
        callback(null);
    });
}
