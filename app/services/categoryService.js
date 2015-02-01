angular.module('PhoenixCMS').service('CategoryService', ['$http', 'config', categoryService]);

function categoryService($http, config) {

    this.list = function(callback){

        var categories = [];

        $http({
            method:'GET',
            url: 'posts/posts.json',
            cache: true
        }).success(function (data){

            $.each(data, function(index, value){

                //get post categories
                for(var i = 0; i < data[index].categories.length; i++){
                    if($.inArray(data[index].categories[i], categories) == -1){
                        categories = categories.concat(data[index].categories[i]);
                    }
                }

            });

            callback(categories);

        });

    }

}
