angular.module('PhoenixCMS').config(config);

function config($routeProvider, $locationProvider) {


    $routeProvider

    .when('/', {
        templateUrl : 'app/components/post/postList.html',
        controller  : 'PostListController'
    })

    .when('/post/:id/:title', {
        templateUrl : function(urlattr){
            console.log(urlattr.id);
            return 'app/components/post/postView.html';
        },
        controller  : 'PostViewController'
    })

    .when('/category/:category/', {
        templateUrl : function(urlattr){
            console.log(urlattr.id);
            return 'app/components/post/postList.html';
        },
        controller  : 'PostListController'
    })

    .otherwise({
        templateUrl : './../commons/404.html'
    });

    // $locationProvider.html5Mode(true);

}
