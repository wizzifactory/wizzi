/*
    artifact generator: C:\My\wizzi\wizzi-mono\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-mono\packages\wizzi-cli\.wizzi\ittf\cmds\generate.js.ittf
*/
'use strict';
const path = require('path');
const util = require('util');
const fs = require('fs');
const async = require('async');
const wizzi = require('wizzi');
function generateSchemas(schemasToGen, wfJobFolder, destPath, packageName) {
    async.mapSeries(schemasToGen, function(schemaName, callback) {
        console.log('wizzi-cli.generate.Generating schema ' + schemaName);
        wizzi.generateWizziModelTypes({
            configOptions: {}, 
            wfschema: {
                name: schemaName, 
                ittfDocumentUri: path.join(wfJobFolder, 'ittf', 'lib', 'wizzi', 'schemas', schemaName + '.wfschema.ittf'), 
                outputPackageFolder: destPath
            }
        }, function(err, result) {
            if (err) {
                throw new Error('Package: ' + packageName + ' schema ' + schemaName + '  wizzi models production error: ' + (util.inspect(err, {
                        depth: null
                    })));
            }
            console.log('wizzi-cli.generate.Generate schema result', result);
            callback(null, result);
        });
    }, function(err, result) {
        if (err) {
            wizzi.printWizziJobError($name, err);
        }
    });
}
module.exports = (args) => {
    let currentDir = process.cwd();
    let currentPath = null;
    let configPath = null;
    while (configPath == null && currentDir.length > 3) {
        currentPath = path.join(currentDir, 'wizzi.config.js');
        try {
            console.log('wizzi-cli.generate.searching', currentPath);
            const stat = fs.lstatSync(currentPath);
            if (stat.isFile()) {
                configPath = currentPath;
            }
        } 
        catch (ex) {
        } 
        currentDir = path.dirname(currentDir);
    }
    if (!configPath) {
        console.error(`config file "wizzi.config.js" not found`);
        return ;
    }
    const configInstance = require(configPath);
    console.log('wizzi-cli.generate.configInstance', configInstance);
    wizzi.executeWizziJob({
        user: 'stefi', 
        role: 'admin', 
        storeKind: 'filesystem', 
        config: {
            wfBaseFolder: __dirname, 
            plugins: configInstance.plugins
        }, 
        job: {
            name: configInstance.wfjobName, 
            ittfDocumentUri: configInstance.wfjobPath, 
            productionOptions: wizzi.productionOptions({
                indentSpaces: 4, 
                basedir: __dirname, 
                verbose: 2, 
                dumps: {
                    dumpsBaseFolder: path.join(__dirname, '_dumps'), 
                    mTreeBuildupJsWizziScript: {
                        dump: false
                    }
                }
            }), 
            globalContext: configInstance.globalContext
        }
    }, function(err) {
        if (err) {
            return wizzi.printWizziJobError(configInstance.wfjobName, err);
        }
        if (configInstance.schemas && configInstance.schemas.length > 0) {
            generateSchemas(configInstance.schemas, path.dirname(configInstance.wfjobPath), configInstance.destPath, configInstance.packageName || configInstance.wfjobName);
        }
    });
};
