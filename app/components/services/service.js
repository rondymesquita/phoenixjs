phoenix.service('Service', ['$http', '$q', service]);

function service($http, $q) {

    // this.get = function(url, success, error){
    //
    //     $http({
    //         method:'GET',
    //         url: url,
    //         cache: true
    //     }).success(function (data, status){
    //         success(data, status);
    //     }).error(function(data, status){
    //         if(error){
    //             error(data, status);
    //         }
    //     });
    // };

    this.get = function(url){

        var deferred = $q.defer();

        $http({
            method:'GET',
            url: url,
            cache: true
        }).then(function (response){
            deferred.resolve(response.data);
        });

        return deferred.promise;
    };
}
