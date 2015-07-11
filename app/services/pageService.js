angular.module('PhoenixCMS').service('PageService', ['$http', 'config', pageService]);

function pageService($http, config) {

    var pagesLocation = 'content/pages/pages.json';

    // Generate a friendly url to post
    function generateFriendlyUrl(post){
        return post.title.replace(/ /g,"-").toLowerCase();
    };

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
                data[index]["url"] = generateFriendlyUrl(data[index]);

                if(name === data[index]["url"]){
                    page = data[index];
                    return false;
                }

            });
            callback(page);

        });

    }

}
