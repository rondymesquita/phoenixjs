
angular.module('PhoenixCMS').controller('PostController', ['$scope', '$rootScope', '$http', '$routeParams','PostService', postController]);

function postController($scope, $rootScope, $http, $routeParams, postService) {
    $scope.title = "Posts";


    $scope.routeParams = $routeParams;


    if($scope.routeParams.id){
        $scope.post = 'app/posts/' + $scope.routeParams.id + '.md';
    }else if($scope.routeParams.category){
        console.log("listando por categoria: "+$scope.routeParams.category);

        postService.listByCategory($scope.routeParams.category, function(query){
            $rootScope.posts = query.posts;
            $rootScope.categories = query.categories;
        });

    }else{

    }

    postService.list(function(query){
        $rootScope.posts = query.posts;
        $rootScope.categories = query.categories;
    });










}
