angular.module('PhoenixCMS').config(config);

function config($routeProvider) {
    $routeProvider

    .when('/', {
        templateUrl : './../post/postList.html',
        controller  : 'PostController'
    })

    .when('/post/:id', {
        templateUrl : function(urlattr){
            return './../post/postView.html';
        },
        controller  : 'PostController'
    })


    .otherwise({
        templateUrl : './../commons/404.html'
    });

}
