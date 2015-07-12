angular.module('PhoenixCMS').service('PageService', ['$http', 'config', pageService]);

function pageService($http, config) {

    var pagesLocation = 'content/pages/pages.json';

    //Get a page by Id
    this.getByName= function(name, callback){

        var page = {};

        $http({
            method:'GET',
            url: pagesLocation,
            cache: true
        }).success(function (data){

            $.each(data, function(index, value){
                //create friendly url
                data[index]["url"] = GenerateFriendlyUrl(data[index]);

                if(name === data[index]["url"]){
                    page = data[index];
                    return false;
                }

            });
            callback(page);

        });

    }

}
