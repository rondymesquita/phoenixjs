angular.module('PhoenixCMS').directive('sidebar',['config', appHeader]);

function appHeader(config){
    return {
        restrict: 'E',
        templateUrl: 'app/themes/'+config.theme+'/sidebar/sidebar.html'
    };
}
