
angular.module('PhoenixCMS').controller('PostViewController', ['$scope', 'httpClient','constants', '$http', '$routeParams', postController]);

function postController($scope, httpClient, constants, $http, $routeParams) {

    $scope.routeParams = $routeParams;
    $scope.post = 'app/posts/' + $scope.routeParams.id + '.md';


}
