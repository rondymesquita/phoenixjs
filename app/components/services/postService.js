phoenix.service('PostService', ['$http', 'config', postService]);

function postService($http, config) {

    var postsLocation = 'content/posts/posts.json';

    function Query(){
        this.posts = [];
        this.categories = [];
    }

    this.list = function(callback){

        $http({
            method:'GET',
            url: postsLocation,
            cache: true
        }).success(function (data){

            var posts = GetPosts(data);
            callback(posts);

        });

    };

    this.listByCategory = function(category, callback){

        $http({
            method:'GET',
            url: postsLocation,
            cache: true
            }).success(function (data){
                var posts = GetPostsByCategory(data, category);
                callback(posts);
            });

    };

    this.getById = function(id, callback){

        $http({
            method:'GET',
            url: postsLocation,
            cache: true
        }).success(function (data){
            var post = GetPostById(data, id);
            callback(post);
        });

    };

    this.getBySearch = function(search, callback){

        var request = $http({
            method:'GET',
            url: postsLocation,
            cache: true,
        }).success(function(data){
            var posts = GetPostsBySearch(data, search);
            callback(posts);

        });

    };




}
