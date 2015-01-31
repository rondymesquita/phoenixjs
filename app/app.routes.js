angular.module('PhoenixCMS').config(routesConfig);

function routesConfig($routeProvider, $locationProvider, config) {


    $routeProvider

    .when('/', {
        templateUrl : 'app/themes/' + config.theme + '/posts/list.html',
        controller  : 'PostListController'
    })

    .when('/post/:id/:title', {
        templateUrl : function(urlattr){
            console.log(urlattr.id);
            return 'app/themes/' + config.theme + '/posts/view.html';
        },
        controller  : 'PostViewController'
    })

    .when('/category/:category/', {
        templateUrl : function(urlattr){
            console.log(urlattr.category);
            return 'app/themes/' + config.theme + '/posts/byCategory.html';
        },
        controller  : 'PostByCategoryController'
    })

    .otherwise({
        templateUrl : './../commons/404.html'
    });


}
