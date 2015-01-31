
angular
    .module('PhoenixCMS')
    .controller('IndexController', ['$scope', '$rootScope','$routeParams', '$location', 'config','CategoryService', indexController]);

function indexController ($scope, $rootScope, $routeParams, $location, config, categoryService) {

    //loading configuration
    $scope.siteName = config.siteName;
    $scope.siteDescription = config.siteDescription;
    $scope.theme = config.theme;

    //loading categories
    categoryService.list(function(categories){
        $scope.categories = categories;
    });

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
    ]



}
