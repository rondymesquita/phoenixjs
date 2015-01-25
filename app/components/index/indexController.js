
angular
    .module('PhoenixCMS')
    .controller('IndexController', ['$scope', '$rootScope','$routeParams', 'httpClient','constants','$location', function ($scope, $rootScope, $routeParams, httpClient, constants, $location) {

        $scope.appName = "Rondy Mesquita";
        $scope.username = $.cookie(constants.usernameKey);

}]);
