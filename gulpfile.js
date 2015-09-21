var gulp = require('gulp'),
	minifyCSS = require('gulp-minify-css'),
	sass = require('gulp-sass'),
	del = require('del'),
	rename = require('gulp-rename');

gulp.task('delete', function() {
  del(['dist/*'], function (err) {
    console.log('Files deleted');
  });
});

gulp.task('style', function () {
 	return gulp
 		.src('assets/styles/main.scss')
		.pipe(sass({outputStyle: 'compact'}))
		.pipe(gulp.dest('./dist/styles'));
});

gulp.task('stylemin', function () {
 	return gulp
 		.src('assets/styles/main.scss')
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(rename({suffix:'.min'}))
		.pipe(gulp.dest('./dist/styles'));
});


gulp.task('default', ['delete', 'style', 'stylemin']);