
angular
    .module('PhoenixCMS')
    .controller('IndexController', ['$scope', '$rootScope','$routeParams', '$location', 'config', indexController]);

function indexController ($scope, $rootScope, $routeParams, $location, config) {

    $scope.appName = config.appName;
    $scope.theme = config.theme;
    $scope.scripts = '<script src="app/themes/'+ $scope.theme + '/routes.js"></script>'
    
    //load configuration here

}
