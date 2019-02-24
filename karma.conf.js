// Karma configuration
// Generated on Fri Dec 28 2018 13:19:39 GMT+0300 (Belarus Standard Time)

module.exports = function (config) {
  config.set({
    basePath: "",

    frameworks: ["jasmine"],

    files: [
      "./node_modules/jquery/dist/jquery.js",

      "./node_modules/bootstrap/dist/js/bootstrap.min.js",
      "./node_modules/bootstrap/dist/css/bootstrap.min.css",

      "./node_modules/angular/angular.js",
      "./node_modules/angular-mocks/angular-mocks.js",

      "./src/app/**/*.spec.js"
    ],

    webpack: require("./webpack-test.config"),

    preprocessors: { "./src/app/**/*.spec.js": ["webpack"] },

    exclude: [],

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ["progress"],

    // web server port
    port: 9876,

    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ["Chrome"],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    plugins: [
      require("karma-jasmine"),
      //require("karma-requirejs"),
      require("karma-chrome-launcher"),
      require("karma-webpack")
      //require("karma-sourcemap-loader")
    ]
  });
};
