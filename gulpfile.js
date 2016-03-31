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
var purify = require('gulp-purifycss');

var OUTPUT = "dist";

var phoenixJs = [
	'./app/components/app.js', // load module first
	'./app/components/**/*.js' // load all that remains except module loaded already
];

var libraries = [
	'./bower_components/angular/angular.js',
	'./bower_components/angular-resource/angular-resource.js',
	'./bower_components/angular-route/angular-route.js',
	'./bower_components/angular-sanitize/angular-sanitize.js',
	'./bower_components/showdown/compressed/Showdown.js',
	'./bower_components/angular-markdown-directive/markdown.js',
	'./bower_components/angular-utils-pagination/dirPagination.js'
];


var phoenixTest = [
	'!./app/components/app.js', //exclude default module
	'./test/app.test.js', //add test module
	'./app/components/**/*.js',
];

var librariesTest = [
	'./bower_components/jasmine/lib/jasmine-core/jasmine.js',
	'./bower_components/jasmine/lib/jasmine-core/jasmine-html.js',
	'./bower_components/jasmine/lib/jasmine-core/boot.js',
	'./bower_components/jquery/dist/jquery.js',
	'./bower_components/angular/angular.js',
	'./bower_components/angular-mocks/angular-mocks.js',
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

gulp.task('cleanTempFiles', [],function () {
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

	/*For Production*/
	gulp
		.src(phoenixJs)
		.pipe(concat('phoenix.js'))
		.pipe(gulp.dest(OUTPUT))
		.pipe(uglify({
			mangle: false,
			compress: true,
		}))
		.pipe(rename('phoenix.min.js'))
		.pipe(gulp.dest(OUTPUT));

	gulp
		.src(libraries)
		.pipe(concat('libraries.js'))
		.pipe(gulp.dest(OUTPUT))
		.pipe(uglify({
			mangle: true,
			compress: true,
		}))
		.pipe(rename('libraries.min.js'))
		.pipe(gulp.dest(OUTPUT));

	/*
		For Testing
		Libraries with Angular Mock, Jquery, Jasmine
	*/

	gulp
		.src(phoenixTest)
		.pipe(concat('phoenix.test.js'))
		.pipe(gulp.dest(OUTPUT));

	gulp
		.src(librariesTest)
		.pipe(concat('libraries.test.js'))
		.pipe(gulp.dest(OUTPUT));

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
			.pipe(purify([
				'./index.html',
				'./app/themes/**/*.js',
				'./app/themes/**/*.html',
				'./content/**/*.js',
				'./content/**/*.html'
			])) //remove unused based on this files
			.pipe(cleanCSS({compatibility: 'ie8'})) // minify
			.pipe(rename('styles.css'))
			.pipe(gulp.dest(OUTPUT));

	}catch(err){
		console.log('Expected styles.json file does not exists. Theme styles will not be minified.');
	}

});

gulp.task('copy', function() {

	gulp
		.src('src/index.src.html')
		.pipe(rename('index.html'))
		.pipe(gulp.dest(OUTPUT));

	gulp
		.src('content/**')
		.pipe(gulp.dest(OUTPUT + '/content'));

	gulp
		.src('app/themes/**')
		.pipe(gulp.dest(OUTPUT + '/app/themes'));
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
	var content = fs.readFileSync('./app/components/config/config.js','utf8');
	content = content.replace(/(\/\*.*\*\/)/g,''); // removing comments
	content = content.replace(/'/g, '"');
	var regex = new RegExp(/(\{[\s\S]*\})/);//capturing all between brackets
	var configString = regex.exec(content)[1];
	var config = JSON.parse(configString)
	return config.theme;
}

function logInfo(task, msg){
	console.log('===> [PhoenixJS]['+task+'] '+ msg);
}
