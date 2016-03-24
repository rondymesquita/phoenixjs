phoenix.service('Service', ['$http', service]);

function service($http) {

    this.get = function(url, success, error){

        $http({
            method:'GET',
            url: url,
            cache: true
        }).success(function (data, status){
            success(data, status);
        }).error(function(data, status){
            if(error){
                error(data, status);
            }
        });
    };
}
