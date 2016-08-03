angular.module("EmailApp")
  .factory("EmailFactory", function EmailFactory($q, $http, $routeParams) {
    'use strict';
    var exports = {};

    exports.reply = function (message) {
      if(message){
        alert('reply content: '+ message)
      }
    };
    exports.getMessage = function (params) {
      if(params.id){
          var deferred = $q.defer();
          $http.get('json/message/' +params.id+ '.json')
            .success(function (data) {
              console.log('email factory win');
              deferred.resolve(data);
            })
            .error(function (data) {
              console.log('email factory fail');
                deferred.reject(data);
            });
          return deferred.promise;
      }
    };
    return exports;
});
