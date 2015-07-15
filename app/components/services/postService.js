angular.module('PhoenixCMS').service('PostService', ['$http', 'config', postService]);

function postService($http, config) {

    var postsLocation = 'content/posts/posts.json';

    function Query(){
        this.posts = [];
        this.categories = [];
    }

    //List all posts
    this.list = function(callback){

        $http({
            method:'GET',
            url: postsLocation,
            cache: true
        }).success(function (data){

            var posts = GetPosts(data);
            callback(posts);

        });

    }

    //List all posts by givens string category
    this.listByCategory = function(category, callback){

        $http({
            method:'GET',
            url: postsLocation,
            cache: true
            }).success(function (data){
                var posts = GetPostsByCategory(data, category);
                callback(posts);
            });

    }

    //Get a post by Id
    this.getById = function(id, callback){

        $http({
            method:'GET',
            url: postsLocation,
            cache: true
        }).success(function (data){
            var post = GetPostById(data, id);
            callback(post);
        });

    }

    //Get a post by search
    //Search only in json file
    this.getBySearch = function(search, callback){

        var request = $http({
            method:'GET',
            url: postsLocation,
            cache: true,
        }).success(function(data){
            var posts = GetPostsBySearch(data, search);
            callback(posts);

        });

    }




}
