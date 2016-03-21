var gulp = require('gulp');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var minify = require('gulp-minify');

// Definimos o diretorio dos arquivos para evitar repetição futuramente
var moduleFiles = "./app/components/*.js";
var utilFiles = "./app/*.js";
var componentsFiles = "./app/components/*/*.js";

//Aqui criamos uma nova tarefa através do ´gulp.task´ e damos a ela o nome 'lint'
gulp.task('lint', function() {

	// Aqui carregamos os arquivos que a gente quer rodar as tarefas com o `gulp.src`
	// E logo depois usamos o `pipe` para rodar a tarefa `jshint`
	gulp.src([moduleFiles,utilFiles,componentsFiles])
	.pipe(jshint())
	.pipe(jshint.reporter('default'));

});

//Criamos outra tarefa com o nome 'dist'
gulp.task('js', function() {

	gulp
		.src([moduleFiles,utilFiles,componentsFiles])
		.pipe(concat('./dist'))
		.pipe(rename('phoenix.js'))
		// .pipe(uglify())
		.pipe(gulp.dest('./dist'));
});

gulp.task('copy', function() {

	gulp
		.src('./index.html')
		.pipe(gulp.dest('./dist'));
});

//Criamos uma tarefa 'default' que vai rodar quando rodamos `gulp` no projeto
gulp.task('default', function() {

	// Usamos o `gulp.run` para rodar as tarefas
	// E usamos o `gulp.watch` para o Gulp esperar mudanças nos arquivos para rodar novamente
	gulp.run('lint', 'dist');
	gulp.watch(files, function(evt) {
		gulp.run('lint', 'dist');
	});

});

gulp.task('hello', function() {
  // place code for your default task here
  console.log("Hello!!!");
});
