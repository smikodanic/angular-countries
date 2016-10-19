/**
 * Delete /client/dist/ directory
 */
var rimraf = require('rimraf');

module.exports = function () {
    'use strict';
    rimraf('./dist', function () {
        console.log('/dist deleted by rimraf!');
    });
};
