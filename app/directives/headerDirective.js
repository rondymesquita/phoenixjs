angular.module('PhoenixCMS').directive('appHeader',['config', appHeader]);

function appHeader(config){
    return {
        restrict: 'E',
        templateUrl: 'app/themes/'+config.theme+'/header/appHeaderView.html'
    };
}
