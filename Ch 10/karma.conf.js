module.exports = function(config){
    config.set({
    basePath : '../',

    preprocessors: {
        "**/*.html": "ng-html2js" // Preprocessor
    },

    ngHtml2JsPreprocessor: {
        stripPrefix: 'app/',
        moduleName:'templates' //load this module in your tests
    },

    files : [
      'app/lib/jquery/jquery.min.js',
      'app/lib/angular/angular.js',
      'app/lib/angular/angular-*.js',
	  'app/lib/angular-ui-router/angular-*.js',
      'test/lib/angular/angular-mocks.js',
      'app/js/**/*.js',
	  'app/modules/**/*.js',
      'test/unit/**/*.js',
      'app/modules/**/*.html' // Here are your templates.
    ],

    exclude : [
      'app/lib/angular/angular-loader.js',
      'app/lib/angular/*.min.js',
      'app/lib/angular/angular-scenario.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-ng-html2js-preprocessor'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

})}
