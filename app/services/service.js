angular.module('PhoenixCMS').service('Service', ['$http', 'config', service]);

function service($http, config) {

    this.get = function(url, success, error){

        $http({
            method:'GET',
            url: url,
            cache: true
        }).success(function (data, status){
            success(data, status);
        }).error(function(data, status){
            error(data, status);
        });

    }

}
