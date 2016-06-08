var wallabify = require('wallabify');
var wallabyPostprocessor = wallabify({
    entryPatterns: [
        'src/movie-app/app.js'
    ]
});
module.exports = function () {
  return {
      "files": [
          {"pattern": "lib/angular/angular.min.js", "instrument": false},
          {"pattern": "lib/angular/angular-resource.min.js", "instrument": false},
          {"pattern": "lib/angular/angular-mocks.js", "instrument": false},
          {"pattern": "lib/angular/angular-route.min.js", "instrument": false},
          {"pattern": "lib/bootstrap/ui-bootstrap-tpls.min.js", "instrument": false},
          "src/**/*.js"
      ],
      "tests": [
          "spec/**/*.js"
      ],
      postprocessor: wallabyPostprocessor
  }
};