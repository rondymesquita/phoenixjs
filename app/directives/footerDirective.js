angular.module('PhoenixCMS').directive('appFooter',['config',appFooter]);

function appFooter(config){
    return {
        restrict: 'E',
        templateUrl: 'app/themes/'+config.theme+'/footer/appFooterView.html'
    };
}
