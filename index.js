'use strict';
var Q = require('q');

module.exports = function() {
  var deferred = Q.defer();

  var func = function() {
    return deferred.promise;
  };

  func.resolve = function(value) {
    deferred.resolve(value);
  }

  func.reject = function(reason) {
    deferred.reject(reason);
  }

  return func;
}