
angular.module('PhoenixCMS').controller('PostViewController', ['$scope', '$routeParams', postController]);

function postController($scope, $routeParams) {

    $scope.routeParams = $routeParams;
    console.log($routeParams);
    $scope.post = 'app/posts/' + $scope.routeParams.id + '.md';


}
