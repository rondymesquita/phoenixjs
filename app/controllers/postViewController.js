
angular.module('PhoenixCMS').controller('PostViewController', ['$scope', '$rootScope', '$http', '$routeParams','PostService','Service', postViewController]);

function postViewController($scope, $rootScope, $http, $routeParams, postService, service) {

    $scope.title = "Posts";
    $scope.post = [];
    $scope.routeParams = $routeParams;

    postService.getById($scope.routeParams.id, function(post){
        $scope.post = post;
        $rootScope.post = post;
        service.get('content/posts/' + $scope.routeParams.id + '.' + post.type, function(data, status){
          $scope.post.content = data;
        })
    });

}
