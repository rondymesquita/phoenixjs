
angular.module('PhoenixCMS').controller('PostController', ['$scope', 'httpClient','constants', '$http', '$routeParams', postController]);

function postController($scope, httpClient, constants, $http, $routeParams) {
    $scope.title = "Posts";


    $scope.routeParams = $routeParams;

    $scope.post = 'app/posts/' + $scope.routeParams.id + '.md';

    $scope.posts = getPosts();


    function getPosts(){
        $http.get('app/posts/posts.json').success (function(data){
            $.each(data, function(index, value){

                //transfor title into friendly url
                var title = data[index].title.replace(/ /g,"-").toLowerCase();
                data[index]["url"] = title;

            });
            $scope.posts = data;
            // console.log(data);
            return data;
        });
    }

}
