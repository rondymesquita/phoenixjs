
angular
    .module('SmartschoolApp')
    .controller('IndexController', ['$scope', '$rootScope','$routeParams', 'httpClient','constants','$location', function ($scope, $rootScope, $routeParams, httpClient, constants, $location) {

        $scope.appName = "Smartschool";
        $scope.username = $.cookie(constants.usernameKey);

}]);
