'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const remember = require('gulp-remember');
const cached = require('gulp-cached');
const path = require('path');
const browserSync = require('browser-sync').create()

gulp.task('styles', function() {
	return gulp.src('styles/**/*.sass')
	.pipe(cached('styles'))
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer("last 1 version", "> 1%", "ie 10"))
	.pipe(remember('styles'))
	.pipe(concat('styles.css'))
	.pipe(gulp.dest('styles'));
})

gulp.watch('styles/**/*.sass', ['styles']).on('unlink', function(filepath) {
	remember.forget('styles', path.resolve(filepath));
	delete cached.caches.styles[path.resolve(filepath)];
})
