phoenix.service('PageService', ['$http', 'config', pageService]);

function pageService($http, config) {

    var pagesLocation = 'content/pages/pages.json';
    var phoenixFunctions = new PhoenixFunctions();

    this.getById= function(id, callback){


        $http({
            method:'GET',
            url: pagesLocation,
            cache: true
        }).success(function (pages){

            var page = phoenixFunctions.getPageById(pages, id);
            
            callback(page);

        });

    };

}
