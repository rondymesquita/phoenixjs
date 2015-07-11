module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        uglify: {
            options: {
                mangle: false
            },
            app: {
                files: {
                    'phoenixjs/app/controllers/controllers.min.js': ['app/controllers/*.js'],
                    'phoenixjs/app/directives/directives.min.js': ['app/directives/*.js'],
                    'phoenixjs/app/services/services.min.js': ['app/services/*.js'],
                    'phoenixjs/app/app.min.js': ['app/app.module.js','app/app.routes.js'],

                    // 'phoenixjs/app/libraries/libraries.min.js': [
                    //     'bower_components/jquery/dist/jquery.min.js',
                    //     'bower_components/angular/angular.min.js',
                    //     'bower_components/angular-resource/angular-resource.min.js',
                    //     'bower_components/angular-route/angular-route.min.js',
                    //     'bower_components/marked/lib/marked.js',
                    //     'bower_components/angular-md/dist/angular-md.min.js'],
                }
            }
        },
        mkdir: {
            all: {
                options: {
                    create: [
                    'phoenixjs',
                    'phoenixjs/app/controllers',
                    'phoenixjs/app/directives',
                    'phoenixjs/app/services',
                    ]
                },
            },
        },
        copy: {
            main: {
                files: [
                {src: 'app/config.js', dest: 'phoenixjs/'},
                // {src: 'app/app.module.js', dest: 'phoenixjs/'},
                // {src: 'app/app.routes.js', dest: 'phoenixjs/'},
                {src: 'posts/**/*', dest: 'phoenixjs/'},
                {src: 'app/themes/**/*', dest: 'phoenixjs/'},
                {src: 'bower_components/**/*', dest: 'phoenixjs/'},
                ]
            },
        },
        env : {

            options : {

                /* Shared Options Hash */
                //globalOption : 'foo'

            },

            dev: {

                NODE_ENV : 'DEVELOPMENT'

            },

            prod : {

                NODE_ENV : 'PRODUCTION'

            }

        },
        preprocess : {

            prod : {

                src : './src/tmpl/index.html',
                dest : './phoenixjs/index.html'

            }

        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-env');
    grunt.loadNpmTasks('grunt-preprocess');
    grunt.loadNpmTasks('grunt-mkdir');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('build', ['uglify','mkdir', 'env:prod', 'copy','preprocess:prod']);
    // grunt.registerTask('prod', ['jshint', 'env:prod', 'clean:prod', 'uglify:prod', 'cssmin:prod', 'copy:prod', 'preprocess:prod']);

    // Default task(s).
    // grunt.registerTask('default', ['uglify']);

};
