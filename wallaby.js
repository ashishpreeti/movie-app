var wallabify = require('wallabify');
var wallabyPostprocessor = wallabify({
    // entryPatterns: [
    //     'src/movie-app/app.js'
    // ]
});
module.exports = function () {
  return {
      "files": [
          'node_modules/angular/angular.js',
          'node_modules/angular-resource/angular-resource.js',
          'node_modules/angular-route/angular-route.js',
          'node_modules/angular-mocks/angular-mocks.js',
          'node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
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