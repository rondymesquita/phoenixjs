phoenix.controller('PostByCategoryController', ['$scope', '$rootScope', '$http', '$routeParams','PostService', postByCategoryController]);

function postByCategoryController($scope, $rootScope, $http, $routeParams, postService) {
    
    $scope.routeParams = $routeParams;

    postService.listByCategory($scope.routeParams.category).then(function(posts){
        $scope.posts = posts;
        $scope.category = $scope.routeParams.category;
    });

}
