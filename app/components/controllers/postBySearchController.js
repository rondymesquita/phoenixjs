
phoenix.controller('PostBySearchController', ['$scope', '$rootScope', '$http', '$routeParams','$location','PostService', postBySearchController]);

function postBySearchController($scope, $rootScope, $http, $routeParams, $location, postService) {

    $scope.post = [];
    $scope.routeParams = $routeParams;

    postService.listBySearch($scope.routeParams.search).then(function(posts){
            $scope.posts = posts;
            $scope.search = $scope.routeParams.search;
            $scope.searchString = $scope.routeParams.search;
    });

}
