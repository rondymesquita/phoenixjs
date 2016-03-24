var gulp = require('gulp');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var minify = require('gulp-minify');
var clean = require('gulp-clean');
var strip = require('gulp-strip-comments');
var minifyjs = require('gulp-js-minify');
var packer = require('gulp-packer');
var streamify = require('gulp-streamify');
var fs = require('fs');
var Q = require('q');
var data = require('gulp-data');
var runSequence = require('run-sequence');
var jsonfile = require('jsonfile')

// Definimos o diretorio dos arquivos para evitar repetição futuramente

var files = [
	'./app/components/*.js',
	'./app/*.js',
	'./app/components/*/*.js'
];

var libs = [
	'bower_components/jquery/dist/jquery.js',
	'bower_components/angular/angular.js',
	'bower_components/angular-resource/angular-resource.js',
	'bower_components/angular-route/angular-route.js',
	'bower_components/angular-sanitize/angular-sanitize.js',
	'bower_components/showdown/compressed/Showdown.js',
	'bower_components/angular-markdown-directive/markdown.js',
	'bower_components/angular-utils-pagination/dirPagination.js'
];

gulp.task('clean', function () {
	return gulp.src('dist', {read: false})
		.pipe(clean());
});

gulp.task('cleanTempFiles', ['default'],function () {
	gulp
		.src('dist/libraries.js', {read: false})
		.pipe(clean());
});


//Aqui criamos uma nova tarefa através do ´gulp.task´ e damos a ela o nome 'lint'
gulp.task('lint', function() {

	// Aqui carregamos os arquivos que a gente quer rodar as tarefas com o `gulp.src`
	// E logo depois usamos o `pipe` para rodar a tarefa `jshint`
	gulp.src(files)
	.pipe(jshint())
	.pipe(jshint.reporter('default'));

});

gulp.task('js', function() {

	gulp
		.src(files)
		.pipe(concat('dist'))
		.pipe(streamify(packer({base62: true, shrink: false})))
		.pipe(rename('phoenix-min.js'))
		.pipe(gulp.dest('dist'));

	gulp
		.src(libs)
		.pipe(concat('libraries.js'))
		//.pipe(rename('libraries.js'))
		.pipe(minify())
		.pipe(gulp.dest('dist'));

});

gulp.task('css', function() {

	var content = fs.readFileSync('./app/config.js','utf8');

	var re = /\{((.*\s*)*)\}/; //capturing all between brackets
	var regex = new RegExp(re);
	var config = regex.exec(content).toString();
	config = config.replace(/\/\*(.*)\*\//g,''); // removing comments
	console.log("==="+config+"===");
	JSON.parse(config);
	// var theme = new RegExp(/theme: *\'(\w+)\'/).exec(config).toString();



});

gulp.task('copy', function() {

	gulp
		.src('src/index.src.html')
		.pipe(rename('index.html'))
		.pipe(gulp.dest('dist'));

	gulp
		.src('content/**')
		.pipe(gulp.dest('dist/content'));

	gulp
		.src('app/themes/**')
		.pipe(gulp.dest('dist/app/themes'));

	gulp
		.src('bower_components/angular-utils-pagination/dirPagination.tpl.html')
		.pipe(gulp.dest('dist/modules'));
});


gulp.task('default', ['lint','copy','js'],function() {

	//gulp.run('lint', 'copy', 'js'); //deprecated

	// gulp.watch([files,libs], function(evt) {
	// 	gulp.run('copy', 'js', 'js-libs'); //deprecated
	// });
	console.log('done');
});

gulp.task('hello', function() {
  // place code for your default task here
  console.log("Hello!!!");
});
