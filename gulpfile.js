var gulp = require('gulp'),
    gutil = required('gulp-util'),
    coffee = required('gulp-coffee');
var coffeeSources = ['components/coffee/*.coffee'];
gulp.task('coffee', function(){
    gutil.src(coffeeSources)
        .pipe(coffee({ bare: true })
            .on('error', gutil.log))
        .pipe(gulp.dest('components/scripts'))
});