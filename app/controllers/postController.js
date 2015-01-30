
angular.module('PhoenixCMS').controller('PostController', ['$scope', '$rootScope', '$http', '$routeParams','PostService', postController]);

function postController($scope, $rootScope, $http, $routeParams, postService) {

    function hello(){
        alert("Hello");
    };

    $scope.title = "Posts";
    $scope.post = [];
    $scope.routeParams = $routeParams;


    if($scope.routeParams.id){
        console.log("listando post unico: "+$scope.routeParams.id);
        postService.getById($scope.routeParams.id, function(post){
            $scope.post = post
            $scope.post.content = 'app/posts/' + $scope.routeParams.id + '.md';
        });

    }else if($scope.routeParams.category){
        console.log("listando por categoria: "+$scope.routeParams.category);
        postService.listByCategory($scope.routeParams.category, function(posts){
            $scope.posts = posts;
            $scope.category = $scope.routeParams.category;
        });

    }else{
        console.log("listando tudo");
        postService.list(function(posts){
            $scope.posts = posts;
        });
    }












}
