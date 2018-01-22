/**
 * Created by enrique.cantillo on 14.01.18.
 */
module.exports = function(grunt) {

    // project & task config
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'public/css/styles.css' : 'dev/sass/styles.scss'
                }
            }
        },

        babel: {
            options: {
                sourceMap: true,
                presets: ['env']
            },
            dist: {
                files: {
                     'public/js/scripts-compiled.js' : 'dev/scripts/scripts.js'
                }
            }
        },

        watch: {

            sass:  {
                files: [
                    'dev/sass/*.scss'
                ],
                tasks: ['sass']
            },

            babel: {
                files:[
                    'dev/scripts/*.js'
                ],
                tasks: ['babel']
            }
        },

        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'public/css/*.css',
                        'public/*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './public'
                }
            }
        }
    });

    // simpler, loads all of the above tasks
    require('load-grunt-tasks')(grunt);

    // custom tasks
    grunt.registerTask('default', ['browserSync', 'watch', 'sass', 'babel']);
};