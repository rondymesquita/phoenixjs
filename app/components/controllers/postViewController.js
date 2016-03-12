
phoenix.controller('PostViewController', ['$scope', '$rootScope', '$http', '$routeParams','config','PostService','Service', postViewController]);

function postViewController($scope, $rootScope, $http, $routeParams, config, postService, service) {

    $scope.title = "Posts";
    $scope.post = [];
    $scope.routeParams = $routeParams;

    postService.getById($scope.routeParams.id, function(post){
        $scope.post = post;
        $rootScope.post = post;
        service.get('content/posts/' + $scope.routeParams.id + '.' + post.type, function(data, status){
          $scope.post.content = data;
        });

        $scope.intenseDebateAcct = config.intenseDebateAcct;
        $scope.intenseDebateId = "/post/"+$scope.post.id+"/"+$scope.post.url;
        $scope.intenseDebateUrl = "/post/"+$scope.post.id+"/"+$scope.post.url;


    });

}
