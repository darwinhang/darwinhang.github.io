var gulp = require('gulp');
var less = require('gulp-less');

// pre-compile less into css
gulp.task('less', function () {
  gulp.src('less/main.less')
    .pipe(less())
    .pipe(gulp.dest('css'));	
});

// minify css
gulp.task('minify', function(){

});

// watcher