angular.module('PhoenixCMS').directive('footer',['config',appFooter]);

function appFooter(config){
    return {
        restrict: 'E',
        templateUrl: 'app/themes/'+config.theme+'/footer/footer.html'
    };
}
