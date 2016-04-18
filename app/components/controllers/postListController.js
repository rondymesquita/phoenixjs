
phoenix.controller('PostListController', ['$scope', '$rootScope', '$http', '$routeParams','PostService', postListController]);

function postListController($scope, $rootScope, $http, $routeParams, postService) {

    $scope.title = "Posts";
    $scope.post = [];
    $scope.routeParams = $routeParams;

    postService.list().then(function(posts){
        $scope.posts = posts;
    });

}
