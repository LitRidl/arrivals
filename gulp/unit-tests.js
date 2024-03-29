'use strict';

var path = require('path');
var gulp = require('gulp');
/* eslint-disable no-unused-vars */
var conf = require('./conf');
/* eslint-enable no-unused-vars */

var karma = require('karma');

function runTests(singleRun, done) {
    karma.server.start({
        configFile: path.join(__dirname, '/../karma.conf.js'),
        singleRun: singleRun,
        autoWatch: !singleRun,
    }, function (failCount) {
        done(failCount ? new Error('Failed ' + failCount + ' tests.') : null);
    });
}

gulp.task('test', ['scripts:test'], function (done) {
    runTests(true, done);
});

gulp.task('test:auto', ['scripts:test-watch'], function (done) {
    runTests(false, done);
});
