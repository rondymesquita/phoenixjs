angular.module('PhoenixCMS').service('Service', ['$http', 'config', service]);

function service($http, config) {

    this.get = function(url, callback){

        $http({
            method:'GET',
            url: url,
            cache: true
        }).success(function (json){
            console.log(json);
            callback(json);
        });

    }

}
