module.exports = function(grunt) {
  'use strict';
  var Global = require(process.cwd() + '/grunt/global');
  var dir = Global.get('dir');

  return {
    all: {
      src: [dir('js/a.js'), dir('js/b.js')],
      dest: dir('build/all.min.js')
    },
    options: {
      warnings: true,
      compress: {
        global_defs: {
          isDev: false
        },
        drop_console: true
      },
      report: 'min'
    }
  };
};
