
angular
    .module('PhoenixCMS')
    .controller('IndexController', ['$scope', '$rootScope','$routeParams', '$location', 'config','CategoryService','PostService', 'Service', indexController]);

function indexController ($scope, $rootScope, $routeParams, $location, config, categoryService, postService, service) {

    //loading configuration
    $scope.siteName = config.siteName;
    $scope.siteDescription = config.siteDescription;
    $scope.theme = config.theme;
    $scope.location = $location;
    $scope.disqusShortname = config.disqusShortname;
    $scope.pagItemsPerPage = config.pagItemsPerPage;

    //Load categories
    categoryService.list(function(categories){
        $scope.categories = categories;
    });

    //Load menu
    service.get('content/menus/menu.json',function(data){
        $scope.menuLinks = data;
    });

    //Config menu navigation
    $scope.isActive = function(item) {
      if (item.url == "#"+$location.path()) {
        return true;
      }
      return false;
    };

    //Add Search support
    $scope.searchPosts = function(search){
        $location.path("/search/"+search);
    }

    //social
    $scope.social = [
        {
            "title":"Facebook",
            "url":"https://www.facebook.com/rondymesquita"
        },
        {
            "title":"Github",
            "url":"https://github.com/rondymesquita"
        },
        {
            "title":"Behance",
            "url":"https://www.behance.net/rondymesquita"
        },
        {
            "title":"Linkedin",
            "url":"https://www.linkedin.com/profile/view?id=110914283&trk=nav_responsive_tab_profile_pic"
        },
        {
            "title":"Twitter",
            "url":"https://twitter.com/rondymesquita"
        }
    ];

    $scope.pageChangeHandler = function(num) {
      window.scrollTo(0, 0);
    };

}
