import gulp from 'gulp';
import browserSync from 'browser-sync';
import pug from 'gulp-pug';
import runSequence from 'run-sequence';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserify from "browserify";
import babelify from "babelify";

// http://blog.revathskumar.com/2016/02/browserify-with-gulp.html
import source from 'vinyl-source-stream';
import buffer from "vinyl-buffer";

// Arquivo de config 
import { Paths } from './config';

// Loading Plugins
const $ = gulpLoadPlugins();

// PATH's dos estáticos
const { images, styles, scripts, views } = Paths;

// Retorna vazio para os casos null e undefined 
function checaNullUndefined(arr){
	return ((arr === null || arr === undefined) ? "" : arr)
}

// Lint
gulp.task('lint',() => {
	return gulp.src('./app/assets/js/**/*.js')
	.pipe($.eslint())
	.pipe($.eslint.format())
});

// Scripts 
gulp.task('browserify',() => {
	const bundler = browserify({ entries: './app/assets/js/main.js' , debug: true }); 
	return bundler
		.transform(babelify) 
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(buffer())
		.pipe($.plumber())
		.pipe($.sourcemaps.init())
		.pipe($.uglify())
		.pipe($.sourcemaps.write('.'))
		.pipe(gulp.dest('./public/dev/js'))
		.pipe(browserSync.stream());
});

// Images
gulp.task('images',() => {
	gulp.src(images)
		.pipe($.imagemin({ optimizationLevel: 5, progressive: true, interlaced: true }))
		.pipe(gulp.dest('./public/dev/img'))
		.pipe(browserSync.stream());
});

// Sass
gulp.task('sass',() => {
	return gulp.src(styles)
		.pipe($.plumber())
		.pipe($.sass())
		.pipe($.sourcemaps.init())
		.pipe($.cssnano({ autoprefixer: { browsers: 'last 5 versions', add: true } }))
		.pipe($.sourcemaps.write('.'))
		.pipe(gulp.dest('./public/dev/css/'))
		.pipe(browserSync.stream());
});

// Views 
gulp.task('views',() => {
	return gulp.src('./app/views/index.pug')
	.pipe($.plumber())
	.pipe(pug({ 
		pretty: true, 
		data: { 
			url: "", 
		} 
	}))
	.pipe(gulp.dest('./public/dev/'))
	.pipe(browserSync.stream());
});

// Watch 
gulp.task('watch',() => {
	gulp.watch(scripts, ['browserify','lint']);
	gulp.watch(images,  ['images']);
	gulp.watch(styles,  ['sass']);
	gulp.watch(views,   ['views']);
}).on('change', browserSync.reload);

// Live browser
gulp.task('browserLive',() => {
	browserSync.init({
		port: 8000,
		server: {
			baseDir: [
				'./public/dev'
			]
		}
	});
});

// Task's 
gulp.task('default',['browserify','lint','sass','images','watch','views','browserLive']);





