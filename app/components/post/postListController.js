
angular.module('PhoenixCMS').controller('PostListController', ['$scope', 'httpClient','constants', '$http', '$routeParams', postController]);

function postController($scope, httpClient, constants, $http, $routeParams) {



    $scope.routeParams = $routeParams;
    // console.log($scope.routeParams.category);

    if($scope.routeParams.category){
        console.log("listando por categoria: "+$scope.routeParams.category);
    }


    $scope.title = "Posts";
    $scope.posts = [];
    $scope.categories = [];

    getPosts($scope.routeParams.category);

    function getPosts(){

        var posts = [];

        $http.get('app/posts/posts.json').success (function(data){

            $.each(data, function(index, value){

                data[index]["url"] = generatePostUrl(data[index]);
                $scope.categories = $scope.categories.concat(data[index].categories);
                posts.push(data[index]);


            });

            function generatePostUrl(post){
                return post.title.replace(/ /g,"-").toLowerCase();
            };



            $scope.posts = posts;
        });
    }

}
