
angular.module('PhoenixCMS').controller('PostController', ['$scope', '$rootScope', '$http', '$routeParams','PostService', postController]);

function postController($scope, $rootScope, $http, $routeParams, postService) {
    $scope.title = "Posts";


    $scope.routeParams = $routeParams;
    $scope.post = 'app/posts/' + $scope.routeParams.id + '.md';

    if($scope.routeParams.category){
        console.log("listando por categoria: "+$scope.routeParams.category);
    }

    postService.list(function(query){
        $rootScope.posts = query.posts;
        $rootScope.categories = query.categories;
    });








}
