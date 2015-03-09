var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer =require('gulp-autoprefixer');

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

// prefix css
gulp.task('prefix', function(){
	gulp.src('css/main.css')
		.pipe(autoprefixer())
		.pipe(gulp.dest('css'));
});