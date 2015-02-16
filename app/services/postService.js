angular.module('PhoenixCMS').service('PostService', ['$http', 'config', postService]);

function postService($http, config) {

    var postsLocation = 'content/posts/posts.json';

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
            url: postsLocation,
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
            url: postsLocation,
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
            url: postsLocation,
            cache: true
        }).success(function (data){
            callback(data[id-1]);

        });

    }


    this.getBySearch = function(search, callback){

        var request = $http({
            method:'GET',
            url: 'app/services/search.php?search='+search,
            //url: 'content/posts/results.json',
            cache: true,
        }).success(function(posts){
                console.log("Result: ");
                console.log(posts);
                callback(posts);

        });

    }

    this.getByCriteria = function(search, callback){

        search = EncodeString(search);

        var result = [];

        var deferred = $.Deferred();

        var jsonRequest = $http({
            method:'GET',
            url: postsLocation,
            cache: true
        }).success(function (posts){

            $.each(posts, function(index, value){
                posts[index]["url"] = generatePostUrl(posts[index]);

                var insertThisPost = false;

                $.each(posts[index], function(index, value){

                    value = EncodeString(value);
                    if(value.indexOf(search) != -1)
                        insertThisPost = true;
                });


                if(insertThisPost)
                    result.push(posts[index]);

            });

            // console.log(posts.length);
            deferred.resolve(result, posts);
            // callback(result);
        });

        var markdownRequests = [];

        deferred.done(function(result, posts){

            $.each(posts, function(index, value){

                var markdownRequests = $http({
                    method:'GET',
                    url: 'content/posts/' + value["id"] + '.md',
                    cache: true
                }).success(function(md){
                    md = EncodeString(md);
                    if(md.indexOf(search) != -1 && $.inArray(posts[index], result) == -1){
                        result.push(posts[index]);
                    }

                });

                // markdownRequests.push(markdownRequests);

            });

            callback(result);

        });

        // $.when.apply($, markdownRequests).done(function(){
        //     callback(result);
        // });


    }


}
