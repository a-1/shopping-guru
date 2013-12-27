'use strict';

require.config({
	paths: {
		angular: '../lib/angular',
		angularRoute: '../lib/angular-route',
		angularResource: '../lib/angular-resource',
		angularAnimate: '../lib/angular-animate',
		angularTouch: '../lib/angular-touch',
		underscore: '../lib/underscore',
		d3: '../lib/d3',
		jquery: '../lib/jquery',
		ngGrid: '../lib/ng-grid'
	},
	shim: {
		angular: {
			exports: 'angular'
		},
		angularRoute: {
			deps: ['angular']
		},
		angularResource: {
			deps: ['angular']
		},
		angularAnimate: {
			deps: ['angular']
		},
		angularTouch: {
			deps: ['angular']
		},
		underscore: {
			exports: '_'
		},
		d3: {
			exports: 'd3'
		},
		ngGrid: {
			deps: ['jquery', 'angular']
		}
	}
});

require([
	'angular',
	'angularRoute',
	'angularResource',
	'angularAnimate',
	'angularTouch',
	'ngGrid',
	'app',
	'config'
], function(angular) {
	angular.bootstrap(document, ['sg']);
});