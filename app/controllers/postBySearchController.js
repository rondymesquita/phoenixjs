
angular.module('PhoenixCMS').controller('PostBySearchController', ['$scope', '$rootScope', '$http', '$routeParams','$location','PostService', postBySearchController]);

function postBySearchController($scope, $rootScope, $http, $routeParams, $location, postService) {

    $scope.title = "Posts";
    $scope.post = [];
    $scope.routeParams = $routeParams;

    $scope.searchPosts = function(search){
            $location.url("/search/"+search);
    }
    console.log($location);
    postService.getByCriteria($scope.routeParams.search,function(posts){
        $scope.posts = posts;
        $scope.search = $scope.routeParams.search;
    });


}
