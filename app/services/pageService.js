angular.module('PhoenixCMS').service('PageService', ['$http', 'config', pageService]);

function pageService($http, config) {

    var pagesLocation = 'content/pages/pages.json';

    //Get a page by Id
    this.getByName= function(name, callback){

        $http({
            method:'GET',
            url: pagesLocation,
            cache: true
        }).success(function (pages){

            var page = GetPageByTitle(pages, name);
            callback(page);

        });

    }

}
