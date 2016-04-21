phoenix.service('Service', ['$http', '$q', service]);

function service($http, $q) {

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

// service.$inject = ['$http','$q'];
// phoenix.service('Service',service);
