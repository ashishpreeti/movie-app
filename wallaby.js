var wallabify = require('wallabify');
var wallabyPostprocessor = wallabify({
    // entryPatterns: [
    //     'src/movie-app/app.js'
    // ]
});
module.exports = function () {
  return {
      "files": [
          'lib/angular/angular.min.js',
          'lib/angular/angular-resource.min.js',
          'lib/angular/angular-route.min.js',
          'lib/angular/angular-mocks.js',
          'lib/bootstrap/ui-bootstrap-tpls.min.js',
          {pattern: "src/**/*.js", load : false}
      ],
      "tests": [
          {pattern: "spec/**/*.js", load : false}
      ],
      postprocessor: wallabyPostprocessor,

      bootstrap: function () {
          window.__moduleBundler.loadTests();
      }
  }
};