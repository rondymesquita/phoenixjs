
angular.module('PhoenixCMS').controller('PostBySearchController', ['$scope', '$rootScope', '$http', '$routeParams','$location','PostService', postBySearchController]);

function postBySearchController($scope, $rootScope, $http, $routeParams, $location, postService) {

    $scope.title = "Posts";
    $scope.post = [];
    $scope.routeParams = $routeParams;

    $scope.searchPosts = function(search){
        // postService.getByCriteria(search,function(posts){
            $location.url("/search/"+search);
        // });
    }

    postService.getByCriteria($scope.routeParams.search,function(posts){
        $scope.posts = posts;
        $scope.search = $scope.routeParams.search;
    });


}
