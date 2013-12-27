module.exports = function(config) {
	config.set({
		basePath: '../',
		frameworks: ['ng-scenario'],
		files: [
			'test/e2e/**/*.js'
		],

		autoWatch: false,

		browsers: ['Chrome'],

		singleRun: true,

		proxies: {
			'/': 'http://localhost:3000/'
		},

		urlRoot: "__karma__",

		junitReporter: {
			outputFile: 'test_out/e2e.xml',
			suite: 'e2e'
		}
	});
};