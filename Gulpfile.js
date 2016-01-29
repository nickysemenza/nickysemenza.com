// grab our gulp packages
var gulp   = require('gulp'),
    sass   = require('gulp-sass');


/* jshint task would be here */

gulp.task('build-css', function() {
    return gulp.src('css/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css/'));
});

/* updated watch task to include sass */

gulp.task('watch', function() {
    //gulp.watch('source/javascript/**/*.js', ['jshint']);
    gulp.watch('css/**/*.scss', ['build-css']);
});