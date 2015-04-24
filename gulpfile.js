var gulp = require('gulp');
var opn = require('opn');
var exec = require('child_process').exec;

// define tasks here
gulp.task('default', function(cb){
    console.log('hexo serve');
    opn('http://localhost:4000');
    exec('hexo serve', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
    console.log('hexo serve done');
    console.log('open browser');
});