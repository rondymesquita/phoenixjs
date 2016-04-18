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
        }).success(function (pages){
            var page = phoenixFunctions.getPageById(pages, id);
            deferred.resolve(page);
        });

        return deferred.promise;
    };

}
