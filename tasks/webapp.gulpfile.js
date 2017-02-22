'use strict';

let fs = require('fs')
let path = require('path')
let gulp = require('gulp')
let bs = require('browser-sync')
let sass = require('gulp-sass')
let nodemon = require('gulp-nodemon')
let sourcemaps = require('gulp-sourcemaps')
let jade = require('gulp-jade')
let ejs = require('gulp-ejs')
let rename = require('gulp-rename')
let del = require('del')
let runSequence = require('run-sequence')
let data = require('gulp-data')

let config = require('../config/config')
const HOST = config.host
const PORT = config.port

let srcdir = {
	html: 'webapp',
	css: 'webapp/css',
	js: 'webapp/js',
	img: 'webapp/img',
	lib: 'webapp/lib',
	views: 'webapp/views',
	scss: 'webapp/scss',
	data: 'webapp/data'
}
let distdir = {
	css: 'public/css',
	js: 'public/js',
	img: 'public/img',
	lib: 'public/lib',
	views: 'views'
}

// dev tasks start

gulp.task('sass', () => {

	return gulp.src(srcdir.scss + '/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(srcdir.css))
})

gulp.task('ejs', () => {

	return gulp.src(srcdir.views + '/*.ejs')
		.pipe(data((file) => {

			let dataPath = srcdir.data + '/' + path.basename(file.path, '.ejs') + '.json';
			return JSON.parse(fs.readFileSync(dataPath, 'utf-8'))
		}))
		.pipe(ejs())
		.pipe(rename((filePath) => {

			filePath.extname = '.html'
		}))
		.pipe(gulp.dest(srcdir.html))
})

gulp.task('jade', () => {

	return gulp.src(srcdir.views + '/*.jade')
		.pipe(data((file) => {

			let dataPath = srcdir.data + '/' + path.basename(file.path, '.jade') + '.json';
			return JSON.parse(fs.readFileSync(dataPath, 'utf-8'))
		}))
		.pipe(jade())
		.pipe(gulp.dest(srcdir.html))
})

gulp.task('server:dev', () => {

	bs.init({
		server: {
			baseDir: 'webapp',
			port: PORT
		}
	})
})

gulp.task('watch', () => {

	gulp.watch(srcdir.views + '/**/*.ejs', ['ejs'])
	// gulp.watch(srcdir.views + '/**/*.jade', ['jade'])
	gulp.watch(srcdir.scss + '/**/*.scss', ['sass'])

	gulp.watch('webapp/**/*.html', bs.reload);
  gulp.watch('webapp/**/*.css', bs.reload);
  gulp.watch('webapp/**/*.js', bs.reload);
})

gulp.task('default', () => {

	return runSequence('sass', 'ejs', 'server:dev', 'watch')
})

// dev tasks end fuck

// build tasks start