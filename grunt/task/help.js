module.exports = function(grunt) {
  'use strict';
  var Global = require(process.cwd() + '/grunt/global');
  var dir = Global.get('dir');

  grunt.task.registerTask('help', 'Help!', function() {
    grunt.log.writeln('Do you need some Help?');
    grunt.log.writeln('Our target dir is', dir());
  });
};
