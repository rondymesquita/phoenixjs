
angular
    .module('SmartschoolApp')
    .controller('IndexController', ['$scope', '$rootScope','$routeParams', 'httpClient','constants','$location', function ($scope, $rootScope, $routeParams, httpClient, constants, $location) {

        $scope.appName = "Smartschool";
        $scope.username = $.cookie(constants.usernameKey);
        $scope.started = false;


        $scope.logout = function() {
            console.log("Sign out!")
            $.removeCookie(constants.usernameKey);
            $.removeCookie(constants.authTokenKey);
            $location.url('/login');
        }

}]);
