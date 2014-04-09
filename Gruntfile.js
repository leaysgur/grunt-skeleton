module.exports = function(grunt) {
  'use strict';

  /* ---------------------------------------------------------
   * Export config and utils.
   * ------------------------------------------------------- */
  var Global = require(process.cwd() + '/grunt/global');
  Global.set('dir', function(path) {
    var basePath = process.cwd() + '/sample/';
    if (path === undefined) { return basePath; }
    return basePath + path;
  });

  /* ---------------------------------------------------------
   * And then, load tasks!
   * ------------------------------------------------------- */
  // npm tasks
  require('load-grunt-config')(grunt);
  // custom tasks
  grunt.task.loadTasks(process.cwd() + '/grunt/task');
};
