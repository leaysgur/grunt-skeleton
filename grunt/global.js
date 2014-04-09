/**
 * Gruntの各タスクで共通で使いたい設定やなんやかんやを
 * まとめておくシングルトンなオブジェクトを返す
 */
var instance = null;
module.exports = (function() {
  'use strict';

  var Singleton = function() {
    var prop = {};

    this.set = function(key, value) {
      prop[key] = value;
    };

    this.get = function(key) {
      if (key) {
        return prop[key];
      }
      return prop;
    };
  };

  if (instance === null) {
    instance = new Singleton();
  }
  return instance;
}());
