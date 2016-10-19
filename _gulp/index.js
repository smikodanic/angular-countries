var gulp = require('gulp');

//GULP Tasks
gulp.task('rimraf', require('./tasks/rimraf.js'));
gulp.task('browserify-uglify', require('./tasks/browserify-uglify.js'));
gulp.task('browserify', require('./tasks/browserify.js'));


//gulp watchers
gulp.task('watch', function () {
    'use strict';

    //*** watch client side
    gulp.watch([
        'src/**/*.js'
    ], ['browserify', 'browserify-uglify']);

});


//first delete then create JS, HTML and CSS files in /client/dist/ directory
gulp.task('build-dist', ['rimraf'], function () {
    'use strict';

    setTimeout(function () {
        gulp.start('browserify', 'browserify-uglify');
    }, 1300);
});



//defult gulp task
gulp.task('default', ['build-dist', 'watch']);
