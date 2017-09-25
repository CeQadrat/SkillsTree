module.exports = function (grunt) {
    require('time-grunt')(grunt);

    grunt.initConfig({
        browserify: {
            dev: {
                files: {
                    'build/index.js': ['index.js']
                },
                options: {
                    transform: [
                        'babelify', 'reactify'
                    ]
                },
            }
        },
        watch: {
            src: {
                files: ['index.js'],
                tasks: ['browserify:dev'],
                options: {
                    livereload: true
                }
            }
        },
        connect: {
            dev: {
                options: {
                    hostname: 'localhost',
                    port: 7012,
                    open: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('start:dev', ['browserify', 'connect', 'watch']);

    grunt.registerTask('default', ['browserify']);
};