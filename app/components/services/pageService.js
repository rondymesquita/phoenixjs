phoenix.service('PageService', ['$http', 'config', pageService]);

function pageService($http, config) {

    var pagesLocation = 'content/pages/pages.json';
    var phoenixFunctions = new PhoenixFunctions();

    this.getByName= function(name, callback){

        $http({
            method:'GET',
            url: pagesLocation,
            cache: true
        }).success(function (pages){

            var page = phoenixFunctions.getPageByTitle(pages, name);
            callback(page);

        });

    };

}
