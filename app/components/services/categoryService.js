phoenix.service('CategoryService', ['$http', 'config', '$q', categoryService]);

function categoryService($http, config, $q) {

    var postsLocation = 'content/posts/posts.json';
    var phoenixFunctions = new PhoenixFunctions();

    /*
     * List categories from all posts
     */
    this.list = function(){

        var deferred = $q.defer();

        $http({
            method:'GET',
            url:  postsLocation,
            cache: true
        }).success(function (posts){
            var categories = phoenixFunctions.getCategories(posts);
            deferred.resolve(categories);
        });

        return deferred.promise;
    };

}
