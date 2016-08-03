angular.module('EmailApp')
  .factory('InboxFactory', function InboxFactory($q, $http, $location) {
      'use strict';
      var exports = {};

      exports.messages = [];

      exports.goToMessage = function (id) {
        if(angular.isNumber(id) ){

          }
      }
      exports.deleteMessage = function (id, index) {
        this.messages.splice(index, 1);
      }

      exports.getMessages = function() {
        var deferred;
        return $http.get('json/emails.json')
          .success(function (data) {
            exports.messages = data;
            deferred.resolve(data);
          })
          .error(function (data) {
            deferred.reject(data);
            console.log("There was an error! ", data);
          });
        return deferred.promise;
      };
      
      return exports;
  });
