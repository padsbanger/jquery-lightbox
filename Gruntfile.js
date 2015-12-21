'use strict';

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  grunt.initConfig({

    watch: {
      html: {
        files: ['demo/', 'src/'],
        options: {
          livereload: {
            port: 9000
          }
        },
      }
    },

    connect: {
      server: {
        options: {
          port: 1337,
          hostname: '',
          livereload: 9000,
          open: true
        }
      }
    },

    copy: {
      main: {
        src: 'src/lightbox.css',
        dest: 'build/',
        filter: 'isFile',
        flatten: true,
        expand: true
      }
    },

    uglify: {
      build: {
        files: {
        'build/lightbox.min.js':  'src/lightbox.js'
        },
        options: {
          preserveComments: 'all'
        }
      }
    }
  });

  grunt.registerTask('build', function() {
    grunt.task.run([
      'copy:main',
      'uglify:build'
    ]);
  });

  grunt.registerTask('dev', function() {
    grunt.task.run([
      'connect:server',
      'watch'
    ]);
  });
};
