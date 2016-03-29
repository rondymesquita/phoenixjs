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
var jsonfile = require('jsonfile');
var cleanCSS = require('gulp-clean-css');

var phoenixJs = [
	'./app/components/*.js',
	'./app/*.js',
	'./app/components/*/*.js'
];

var libraries = [
	'./bower_components/jquery/dist/jquery.js',
	'./bower_components/angular/angular.js',
	'./bower_components/angular-resource/angular-resource.js',
	'./bower_components/angular-route/angular-route.js',
	'./bower_components/angular-sanitize/angular-sanitize.js',
	'./bower_components/showdown/compressed/Showdown.js',
	'./bower_components/angular-markdown-directive/markdown.js',
	'./bower_components/angular-utils-pagination/dirPagination.js'
];

var contentJs = [
	'./content/menus/menu.json'
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

gulp.task('lint', function() {

	gulp
		.src(phoenixJs)
		.pipe(jshint())
		.pipe(jshint.reporter('default'));

});

gulp.task('js', function() {

	gulp
		.src(phoenixJs)
		.pipe(concat('dist'))
		.pipe(streamify(packer({base62: true, shrink: false})))
		.pipe(rename('phoenix-min.js'))
		.pipe(gulp.dest('dist'));

	gulp
		.src(libraries)
		.pipe(concat('libraries.js'))
		//.pipe(rename('libraries.js'))
		.pipe(minify())
		.pipe(gulp.dest('dist'));

	// contentJs.forEach(function(file){
	// 	gulp
	// 		.src(file)
	// 		.pipe(minify())
	// 		.pipe(gulp.dest('dist'));
	// });

});

gulp.task('css', function() {

	var theme = getThemeNameFromConfig();
	try{
		var stylesFile = fs.readFileSync('./app/themes/' + theme + '/styles.json','utf8');

		var styles = [];
		JSON.parse(stylesFile).forEach(function(style){
			styles.push('app/themes/' + theme + "/" + style);
		});

		gulp
			.src(styles)
			.pipe(concat('dist'))
			.pipe(cleanCSS({compatibility: 'ie8'}))
			.pipe(rename('styles.css'))
			.pipe(gulp.dest('dist'));

	}catch(err){
		console.log('Expected styles.json file does not exists. Theme styles will not be minified.');
	}

});

gulp.task('test', function() {
	getThemeNameFromConfig();
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
});


gulp.task('default', ['lint','copy','js','css'],function() {

	//gulp.run('lint', 'copy', 'js'); //deprecated

	// gulp.watch([files,libs], function(evt) {
	// 	gulp.run('copy', 'js', 'js-libs'); //deprecated
	// });
});

gulp.task('hello', function() {
  console.log("Hello!!!");
});

gulp.doneCallback = function(){

}

/* Functions */
function getThemeNameFromConfig(){
	var content = fs.readFileSync('./app/config.js','utf8');
	content = content.replace(/(\/\*.*\*\/)/g,''); // removing comments
	content = content.replace(/'/g, '"');
	var regex = new RegExp(/(\{[\s\S]*\})/);//capturing all between brackets
	var configString = regex.exec(content)[1];
	var config = JSON.parse(configString)
	return config.theme;
}

function logInfo(task, msg){
	console.log('===> [Phoenix]['+task+'] '+ msg);
}
