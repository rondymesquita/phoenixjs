phoenix.service('PostService', ['$http', 'config', postService]);

function postService($http, config) {

    var postsLocation = 'content/posts/posts.json';
    var phoenixFunctions = new PhoenixFunctions();

    this.list = function(callback){

        $http({
            method:'GET',
            url: postsLocation,
            cache: true
        }).success(function (data){

            var posts = phoenixFunctions.getPosts(data);
            callback(posts);

        });

    };

    this.listByCategory = function(category, callback){

        $http({
            method:'GET',
            url: postsLocation,
            cache: true
            }).success(function (data){
                var posts = phoenixFunctions.getPostsByCategory(data, category);
                callback(posts);
            });

    };

    this.getById = function(id, callback){

        $http({
            method:'GET',
            url: postsLocation,
            cache: true
        }).success(function (data){
            var post = phoenixFunctions.getPostById(data, id);
            callback(post);
        });

    };

    this.getBySearch = function(search, callback){

        var request = $http({
            method:'GET',
            url: postsLocation,
            cache: true,
        }).success(function(data){
            var posts = phoenixFunctions.getPostsBySearch(data, search);
            callback(posts);

        });

    };




}
