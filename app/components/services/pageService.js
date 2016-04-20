phoenix.service('PageService', ['$http', 'config', '$q', pageService]);

function pageService($http, config, $q) {

    var pagesLocation = 'content/pages/pages.json';
    var phoenixFunctions = new PhoenixFunctions();

    this.getById= function(id){
        var deferred = $q.defer();

        $http({
            method:'GET',
            url: pagesLocation,
            cache: true
        }).then(function(response){
            var page = phoenixFunctions.getPageById(response.data, id);
            deferred.resolve(page);
        },function(){
            deferred.reject();
        });
        return deferred.promise;
    };

}
