angular.module('PhoenixCMS').config(routesConfig);

function routesConfig($routeProvider, $locationProvider, config) {

    $routeProvider

    .when('/', {
        templateUrl : 'app/themes/' + config.theme + '/posts/list.html',
        controller  : 'PostListController'
    })

    .when('/post/:id/:title', {
        templateUrl : function(urlattr){
            return 'app/themes/' + config.theme + '/posts/view.html';
        },
        controller  : 'PostViewController'
    })

    .when('/category/:category/', {
        templateUrl : function(urlattr){
            return 'app/themes/' + config.theme + '/posts/byCategory.html';
        },
        controller  : 'PostByCategoryController'
    })

    .when('/search/:search', {
        templateUrl : function(urlattr){
            return 'app/themes/' + config.theme + '/posts/bySearch.html'
        },
        controller  : 'PostBySearchController',
    })

    .otherwise({
        templateUrl : 'app/themes/' + config.theme + '/pages/404.html',
    });


}
