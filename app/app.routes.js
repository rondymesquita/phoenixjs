angular.module('SmartschoolApp').config(config);

function config($routeProvider) {
    $routeProvider

    .when('/', {
        templateUrl : './../post/postView.html',
        controller  : 'PostController'
    })

    .when('/disciplines', {
        templateUrl : './../discipline/disciplineView.html',
        controller  : 'DisciplineController'
    })

    .when('/login', {
        templateUrl : './../login/loginView.html',
        controller  : 'LoginController'
    })

    .otherwise({
        templateUrl : './../dashboard/dashboardView.html'
    });

}
