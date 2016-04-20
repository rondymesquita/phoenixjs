phoenix.service('PostService', ['$http', 'config', '$q', postService]);

function postService($http, config, $q) {

    var postsLocation = 'content/posts/posts.json';
    var phoenixFunctions = new PhoenixFunctions();

    this.list = function(){

        var deferred = $q.defer();

        $http({
            method:'GET',
            url: postsLocation,
            cache: true
        }).success(function (data){
            var posts = phoenixFunctions.getPosts(data);
            deferred.resolve(posts);
        });

        return deferred.promise;

    };

    this.listByCategory = function(category){

        var deferred = $q.defer();

        $http({
            method:'GET',
            url: postsLocation,
            cache: true
            }).success(function (data){
                var posts = phoenixFunctions.getPostsByCategory(data, category);
                deferred.resolve(posts);
            });

        return deferred.promise;
    };

    this.getById = function(id){

        var deferred = $q.defer();

        $http({
            method:'GET',
            url: postsLocation,
            cache: true
        }).success(function (data){
            var post = phoenixFunctions.getPostById(data, id);
            deferred.resolve(post);
        });

        return deferred.promise;
    };

    this.listBySearch = function(search){

        var deferred = $q.defer();

        var request = $http({
            method:'GET',
            url: postsLocation,
            cache: true,
        }).success(function(data){
            var posts = phoenixFunctions.getPostsBySearch(data, search);
            deferred.resolve(posts);
        });

        return deferred.promise;
    };
}
