angular.module('PhoenixCMS').directive('header',['config', headerDirective]);

function headerDirective(config){
    return {
        restrict: 'E',
        templateUrl: 'app/themes/'+config.theme+'/header/header.html'
    };
}
