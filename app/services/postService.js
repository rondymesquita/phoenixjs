angular.module('PhoenixCMS').service('PostService', ['$http', 'config', postService]);

function postService($http, config) {

    function Query(){
        this.posts = [];
        this.categories = [];
    }

    function generatePostUrl(post){
        return post.title.replace(/ /g,"-").toLowerCase();
    };

    this.list = function(callback){

        var posts = [];

        $http({
            method:'GET',
            url: 'posts/posts.json',
            cache: true
        }).success(function (data){

            $.each(data, function(index, value){
                //create friendly url
                data[index]["url"] = generatePostUrl(data[index]);
                posts.push(data[index]);

            });

            callback(posts);

        });

    }

    this.listByCategory = function(category, callback){

        var posts= [];

        $http({
            method:'GET',
            url: 'posts/posts.json',
            cache: true
            }).success(function (data){

            $.each(data, function(index, value){
                //create friendly url
                data[index]["url"] = generatePostUrl(data[index]);

                //get post by categories
                for(var i = 0; i < data[index].categories.length; i++){
                    if(category === data[index].categories[i]){
                        posts.push(data[index]);
                    }
                }

            });

            callback(posts);

        });

    }

    this.getById = function(id, callback){

        var post = {};

        $http({
            method:'GET',
            url: 'posts/posts.json',
            cache: true
        }).success(function (data){
            callback(data[id-1]);

        });

    }

    this.getByCriteria = function(search, callback){

        var posts = [];

        $http({
            method:'GET',
            url: 'posts/posts.json',
            cache: true
        }).success(function (data){

            $.each(data, function(index, value){
                data[index]["url"] = generatePostUrl(data[index]);
                // console.log(value);
                var insertThisPost = false;
                $.each(data[index], function(index, value){
                    console.log(value);
                    if(value.indexOf(search) != -1)
                        insertThisPost = true;
                });

                if(insertThisPost)
                    posts.push(data[index]);

            });

            callback(posts);

        });

    }


}
