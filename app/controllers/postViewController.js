
angular.module('PhoenixCMS').controller('PostViewController', ['$scope', '$rootScope', '$http', '$routeParams','PostService', postViewController]);

function postViewController($scope, $rootScope, $http, $routeParams, postService) {

    $scope.title = "Posts";
    $scope.post = [];
    $scope.routeParams = $routeParams;

    postService.getById($scope.routeParams.id, function(post){
        $scope.post = post
        $scope.post.content = 'posts/' + $scope.routeParams.id + '.md';
    });

}
