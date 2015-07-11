angular.module('PhoenixCMS').service('CategoryService', ['$http', 'config', categoryService]);

function categoryService($http, config) {

    var postsLocation = 'content/posts/posts.json';

    /*
     * List categories from all posts
     *
     */
    this.list = function(callback){

        var categories = [];

        $http({
            method:'GET',
            url:  postsLocation,
            cache: true
        }).success(function (posts){

            $.each(posts, function(index, value){

                //get post categories
                for(var i = 0; i < posts[index].categories.length; i++){
                    if($.inArray(posts[index].categories[i], categories) == -1){
                        categories = categories.concat(posts[index].categories[i]);
                    }
                }
            });

            callback(categories);

        });

    }

}
