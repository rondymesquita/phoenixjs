
phoenix.controller('IndexController', ['$scope', '$rootScope','$routeParams', '$location', 'config','constants', 'CategoryService','PostService', 'Service', indexController]);

function indexController ($scope, $rootScope, $routeParams, $location, config, constants, categoryService, postService, service) {

    $scope.location = $location;
    $scope.constants = constants;
    $scope.theme = config.theme;
    $scope.pagItemsPerPage = config.pagItemsPerPage;

    categoryService.list().then(function(categories){
        $scope.categories = categories;
    });

    service.get('content/menus/menu.json').then(function(data){
        $scope.menu = data;
    });

    $scope.isActive = function(item) {
        // console.log("#" + $location.path());
        // console.log(item.url);
      if (item.url == "#" + $location.path()) {
        return true;
      }
      return false;
    };

    $scope.searchPosts = function(search){
        if(search && search.trim()){
            $location.path("/search/" + search);
        }
    };

    /* istanbul ignore next: custom for theme */
    $scope.pageChangeHandler = function(num) {
      window.scrollTo(0, 0);
    };

    /* istanbul ignore next: custom for theme */
    service.get('content/social.json').then(function(data){
        $scope.social = data;
    });

}
