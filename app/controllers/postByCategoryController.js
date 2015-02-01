angular.module('PhoenixCMS').controller('PostByCategoryController', ['$scope', '$rootScope', '$http', '$routeParams','PostService', postByCategoryController]);

function postByCategoryController($scope, $rootScope, $http, $routeParams, postService) {

    $scope.title = "Posts";
    $scope.routeParams = $routeParams;

    postService.listByCategory($scope.routeParams.category, function(posts){
        $scope.posts = posts;
        $scope.category = $scope.routeParams.category;
    });



}
