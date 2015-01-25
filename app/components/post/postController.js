
angular.module('SmartschoolApp').controller('PostController', ['$scope', 'httpClient','constants', '$http', function ($scope, httpClient, constants, $http) {
    $scope.title = "Dashboard";
    $scope.posts = [];

      //loading shortcuts
      $http.get('../../shared/shortcuts.json').success (function(data){
        $scope.posts = data;
      });

}]);
