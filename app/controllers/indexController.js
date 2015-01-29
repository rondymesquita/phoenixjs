
angular
    .module('PhoenixCMS')
    .controller('IndexController', ['$scope', '$rootScope','$routeParams', '$location', 'config','CategoryService', indexController]);

function indexController ($scope, $rootScope, $routeParams, $location, config, categoryService) {

    //loading configuration
    $scope.appName = config.appName;
    $scope.theme = config.theme;

    //loading categories
    categoryService.list(function(categories){
        $scope.categories = categories;
    });



}
