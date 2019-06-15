/*
    artifact generator: C:\My\wizzi\wizzi\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi\packages\wizzi-mtree\.wizzi\ittf\lib\jswizzi\functions\dateUtil.js.ittf
*/
'use strict';
module.exports = {
    now_GMYHMS: function() {
        var date = new Date();
        return date.getDate() + '/' +
            (date.getMonth() + 1) + '/' +
            date.getFullYear() + ':' +
            date.getHours() + ':' +
            date.getMinutes() + ':' +
            date.getSeconds();
    }, 
    GMYHMS: function(date) {
        return date.getDate() + '/' +
            (date.getMonth() + 1) + '/' +
            date.getFullYear() + ':' +
            date.getHours() + ':' +
            date.getMinutes() + ':' +
            date.getSeconds();
    }, 
    GMYHM: function(date) {
        return date.getDate() + '/' +
            (date.getMonth() + 1) + '/' +
            date.getFullYear() + ':' +
            date.getHours() + ':' +
            date.getMinutes()
    }, 
    GMY: function(date) {
        return date.getDate() + '/' +
            (date.getMonth() + 1) + '/' +
            date.getFullYear()
    }
};
