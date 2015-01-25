
angular.module('PhoenixCMS').controller('PostController', ['$scope', 'httpClient','constants', '$http', '$routeParams', postController]);

function postController($scope, httpClient, constants, $http, $routeParams) {
        $scope.title = "Posts";
        $scope.posts = [];
        $scope.routeParams = $routeParams;
        $scope.post = '../../posts/' + $scope.routeParams.id + '.md';


        //loading shortcuts
        $http.get('../../posts/posts.json').success (function(data){
            $scope.posts = data;
        });

    }
