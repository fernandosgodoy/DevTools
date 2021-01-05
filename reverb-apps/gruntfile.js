module.exports = function(grunt) {

  var config = {
    distFolder: '',
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      options: {
        separator: ';',
      },
      
      scripts: {
        src: [
          'node_modules/jquery/dist/jquery.js',
          'resources/js/jquery.slidepanel.setup.js'
        ],
        dest: "temp/scripts-concat.js",
      },
    },

    cssmin: {
      options: {
        mergeIntoShorthands: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'public/dist/main.min.css': [
            'resources/css/layout.css',
          ]
        }
      }
    },

    uglify: {
      options: {
        mangle: {
          reserved: ['jQuery', 'Backbone']
        }
      },
      my_target: {
        files: {
          'public/dist/scripts.min.js': ['temp/scripts-concat.js']
        }
      }
    },

    jshint: {
      files: ['Gruntfile.js', 'web/app/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint','uglify','less']
    }
  };

  grunt.initConfig(config);

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  //tasks
  grunt.registerTask('publish', ['cssmin', 'concat:scripts', 'uglify']);

};