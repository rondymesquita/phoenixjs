
angular.module('PhoenixCMS').controller('PageViewController', ['$scope', '$rootScope', '$http', '$routeParams','PageService','Service', pageViewController]);

function pageViewController($scope, $rootScope, $http, $routeParams, pageService, service) {

    $scope.page = [];
    $scope.routeParams = $routeParams;

    pageService.getByName($scope.routeParams.name, function(page){
        $scope.page = page;
        $rootScope.page = page;
        service.get('content/pages/' + $scope.routeParams.name + '.' + page.type, function(data, status){
          $scope.page.content = data;
        })
    });

}
