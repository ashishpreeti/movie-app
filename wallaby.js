var wallabify = require('wallabify');
var wallabyPostprocessor = wallabify({
    // entryPatterns: [
    //     'src/movie-app/app.js'
    // ]
});
module.exports = function () {
  return {
      "files": [
          {pattern: "lib/angular/angular.min.js", load : false},
          {pattern: "lib/angular/angular-resource.min.js", load : false},
          {pattern: "lib/angular/angular-mocks.js", load : false},
          {pattern: "lib/angular/angular-route.min.js", load : false},
          {pattern: "lib/bootstrap/ui-bootstrap-tpls.min.js", load : false},
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