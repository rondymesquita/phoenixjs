
angular
    .module('PhoenixCMS')
    .controller('IndexController', ['$scope', '$rootScope','$routeParams', 'httpClient','constants','$location', 'config', indexController]);

function indexController ($scope, $rootScope, $routeParams, httpClient, constants, $location, config) {

    $scope.appName = config.appName;

}
