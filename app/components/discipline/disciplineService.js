angular.module('SmartschoolApp').service('DisciplineService', ['$http', 'constants', 'config', function($http, constants, config) {

  this.list = function() {

    url = config.url + config.disciplinesUri;
    console.log(url);

    return $http({
      url: url,
      method: 'GET'
    }).success(function(data, status, header, config) {
      // console.log(data);
    }).error(function(data, status, header, config){
      // console.log(data);
      // console.log(status);
      // console.log(header);
      // console.log(config);
    })['finally'](function() {

    });
  };

  this.save = function(formData) {

      url = config.url + config.disciplinesUri;
      console.log(url);

      return $http({
          url: url,
          method: 'POST',
          data:formData
      }).success(function(data, status, header, config) {

      }).error(function(data, status, header, config){

      })['finally'](function() {

      });
  };


  this.update = function(formData) {

      url = config.url + config.disciplinesUri;
      console.log(url);

      return $http({
          url: url,
          method: 'PUT',
          data:formData
      }).success(function(data, status, header, config) {

      }).error(function(data, status, header, config){

      })['finally'](function() {

      });
  };

    this.delete = function(code) {

      url = config.url + config.disciplinesUri + code;
      console.log(url);

      return $http({
          url: url,
          method: 'DELETE',
      }).success(function(data, status, header, config) {

      }).error(function(data, status, header, config){

      })['finally'](function() {

      });
    };


}]);
