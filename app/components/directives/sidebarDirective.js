angular.module('PhoenixCMS').directive('sidebar',['config', sidebarDirective]);

function sidebarDirective(config){
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/themes/'+config.theme+'/sidebar/sidebar.html'
    };
}
