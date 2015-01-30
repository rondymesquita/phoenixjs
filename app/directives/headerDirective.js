angular.module('PhoenixCMS').directive('header',['config', appHeader]);

function appHeader(config){
    return {
        restrict: 'E',
        templateUrl: 'app/themes/'+config.theme+'/header/header.html'
    };
}
