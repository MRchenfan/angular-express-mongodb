'use strict';

<<<<<<< HEAD
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

let config = require('./config/config')
const HOST = config.host
const PORT = config.port


let srcdir = {
	html: 'web',
	css: 'web/css',
	js: 'web/js',
	img: 'web/img',
	lib: 'web/lib',
	views: 'web/views',
	scss: 'web/scss',
	data: 'web/data'
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
			baseDir: 'web',
			port: PORT
		}
	})
})

gulp.task('watch', () => {

	gulp.watch(srcdir.views + '/**/*.ejs', ['ejs'])
	// gulp.watch(srcdir.views + '/**/*.jade', ['jade'])
	gulp.watch(srcdir.scss + '/**/*.scss', ['sass'])

	gulp.watch('web/**/*.html', bs.reload);
  gulp.watch('web/**/*.css', bs.reload);
  gulp.watch('web/**/*.js', bs.reload);
})
=======
/**
 * @ignore  =====================================================================================
 * @file gulpfile.js
 * @author  damon
 * @version 0.1.0
 * @ignore  created in 2017/2/18
 * @ignore  depend gulp colors argv
 * @ignore  =====================================================================================
 */

let gulp = require('gulp')
let colors = require('colors')
let argv = require('yargs').argv

switch (argv.env) {
>>>>>>> webapp

	case 'webapp': {

		require('./tasks/webapp.gulpfile')
		break
	}
	default: {

		require('./tasks/web.gulpfile')
	}
}

console.log(('\n\n=> development enviroment: ' + argv.env + ' <=\n\n').red)
