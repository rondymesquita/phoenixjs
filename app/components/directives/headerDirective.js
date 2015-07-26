angular.module('PhoenixCMS').directive('header',['config', headerDirective]);

function headerDirective(config){
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/themes/'+config.theme+'/header/header.html'
    };
}
