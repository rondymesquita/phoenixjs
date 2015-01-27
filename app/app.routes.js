angular.module('PhoenixCMS').config(config);

function config($routeProvider, $locationProvider) {


    $routeProvider

    .when('/', {
        templateUrl : 'app/components/post/postList.html',
        controller  : 'PostController'
    })

    .when('/post/:id/:title', {
        templateUrl : function(urlattr){
            console.log(urlattr.id);
            return 'app/components/post/postView.html';
        },
        controller  : 'PostController'
    })


    .otherwise({
        templateUrl : './../commons/404.html'
    });

    // $locationProvider.html5Mode(true);

}
