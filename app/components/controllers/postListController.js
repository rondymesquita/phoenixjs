
phoenix.controller('PostListController', ['$scope', '$rootScope', 'PostService', postListController]);

function postListController($scope, $rootScope, postService) {

    $scope.post = [];

    postService.list().then(function(posts){
        $scope.posts = posts;
    });

}
