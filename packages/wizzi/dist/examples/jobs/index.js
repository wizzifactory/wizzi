/*
    artifact generator: C:\My\wizzi\wizzi\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi\packages\wizzi\.wizzi\ittf\examples\jobs\index.js.ittf
*/
'use strict';
var path = require('path');
var stringify = require('json-stringify-safe');
var wizzi = require('../../index');
var friendsArray = [
    'arthur', 
    'mary'
];
execute("job_1", function(err, notUsed) {
    if (err) {
        return callback(err);
    }
});
function execute(jobName, callback) {
    var jobsPath = path.join(__dirname, 'ittf', jobName);
    // Execute a wizzi job
    wizzi.job(path.join(jobsPath, 'index.wfjob.ittf'), {
        friends: friendsArray
    }, {
        name: jobName, 
        jobContext: {
            options: {
                destFolder: 'output'
            }
        }, 
        globalContext: {
            options: {
                destFolder: 'output'
            }
        }
    }, function(err, jobResults) {
        if (err) {
            console.log('err', err);
            throw new Error(err.message);
        }
        console.log("results of job " + jobName + "\n", JSON.stringify(jobResults, null, 2));
    });
}
