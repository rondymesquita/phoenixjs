// Karma configuration
// Generated on Tue Mar 29 2016 23:12:06 GMT-0300 (BRT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
        //You do not need to load jasmine because its load by default by karma
    	'./bower_components/jquery/dist/jquery.js',
    	'./bower_components/angular/angular.js',
    	'./bower_components/angular-mocks/angular-mocks.js',
    	'./bower_components/angular-resource/angular-resource.js',
    	'./bower_components/angular-route/angular-route.js',
    	'./bower_components/angular-sanitize/angular-sanitize.js',
    	'./bower_components/showdown/compressed/Showdown.js',
    	'./bower_components/angular-markdown-directive/markdown.js',
    	'./bower_components/angular-utils-pagination/dirPagination.js',

        {pattern: './app/components/app.js', included: false, served: false},//exclude default module
    	'./test/app.test.js', //add test module
    	'./app/components/**/*.js',
        'test/spec/*.config.js',
        'test/spec/*.spec.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        './app/components/**/*.js': ['coverage']
    },

    coverageReporter: {
      type : 'html',
      dir : 'karma-coverage/'
  },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress','dots','coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Firefox'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
