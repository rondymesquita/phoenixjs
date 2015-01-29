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

        var query = new Query();

        $http.get('app/posts/posts.json').success(function (data){

            console.log(data);

            $.each(data, function(index, value){
                //create friendly url
                data[index]["url"] = generatePostUrl(data[index]);


                //get post categories
                for(var i = 0; i < data[index].categories.length; i++){
                    if($.inArray(data[index].categories[i], query.categories) == -1){
                        query.categories = query.categories.concat(data[index].categories[i]);
                    }
                }

                query.posts.push(data[index]);

            });

            callback(query);

        });

    }

    this.getById = function(id){
        $http.get('app/posts/posts.json').success(function (data){

            $.each(data, function(index, value){
                //create friendly url
                data[index]["url"] = generatePostUrl(data[index]);

                //get post categories
                query.categories = query.categories.concat(data[index].categories);

                query.posts.push(data[index]);

            });

            callback(query);

        });
    }


}
