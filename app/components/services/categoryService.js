phoenix.service('CategoryService', ['$http', 'config', categoryService]);

function categoryService($http, config) {

    var postsLocation = 'content/posts/posts.json';
    var phoenixFunctions = new PhoenixFunctions();

    /*
     * List categories from all posts
     */
    this.list = function(callback){

        $http({
            method:'GET',
            url:  postsLocation,
            cache: true
        }).success(function (posts){
            var categories = phoenixFunctions.getCategories(posts);
            callback(categories);
        });

    };

}
