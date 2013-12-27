var LIVERELOAD_PORT = 35729;

var lrSnippet = require('connect-livereload')({
	port: LIVERELOAD_PORT
});

var mountFolder = function(connect, dir) {
	return connect.static(require('path').resolve(dir));
};

module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		jshint: {
			files: ['gruntfile.js', 'app/js/**.js'],
			options: {
				jshintrc: '.jshintrc',
				ignores: ['app/js/app.js']
			}
		},

		less: {
			development: {
				files: {
					'app/css/app.css': 'app/less/app.less'
				}
			}
		},

		copy: {
			lib: {
				expand: true,
				flatten: true,
				cwd: 'bower_components/',
				src: [
					'angular/angular.js',
					'angular-route/angular-route.js',
					'angular-animate/angular-animate.js',
					'angular-resource/angular-resource.js',
					'angular-touch/angular-touch.js',
					'underscore/underscore.js',
					'd3/d3.js',
					'requirejs/require.js'
				],
				dest: 'app/lib'
			}
		},

		connect: {
			options: {
				port: 3000,
				hostname: 'localhost'
			},
			livereload: {
				options: {
					middleware: function(connect) {
						return [
							lrSnippet,
							mountFolder(connect, 'app')
						];
					}
				}
			}
		},

		watch: {
			jshit: {
				files: ['<%= jshint.files %>'],
				tasks: ['jshint']
			},
			less: {
				files: ['app/less/app.less'],
				tasks: ['less']
			},
			livereload: {
				options: {
					livereload: true
				},
				files: [
					'app/**/*',
					'app/css/*.css',
					'app/js/{,*/}*.js',
					'app/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
				]
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.registerTask('default', [
		'copy',
		'jshint',
		'less',
		'connect:livereload',
		'watch'
	]);

};