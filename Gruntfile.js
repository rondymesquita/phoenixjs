module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        uglify: {
            app: {
                files: {
                    'app/controllers/controllers.min.js': ['app/controllers/*.js'],
                    'app/directives/directives.min.js': ['app/directives/*.js'],
                    'app/services/services.min.js': ['app/services/*.js'],
                    'app/app.min.js': ['app/app.module.js','app/app.route.js']
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    // grunt.registerTask('default', ['uglify']);

};
