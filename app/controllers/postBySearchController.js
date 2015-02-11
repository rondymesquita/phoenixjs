
angular.module('PhoenixCMS').controller('PostBySearchController', ['$scope', '$rootScope', '$http', '$routeParams','$location','PostService', postBySearchController]);

function postBySearchController($scope, $rootScope, $http, $routeParams, $location, postService) {

    $scope.title = "Search";
    $scope.post = [];
    $scope.routeParams = $routeParams;

    console.log("Search Post: "+$routeParams.search);

    postService.getByCriteria($scope.routeParams.search,function(posts){
        $scope.posts = posts;
        $scope.search = $scope.routeParams.search;
    });

}
