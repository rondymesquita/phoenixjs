angular.module('PhoenixCMS').directive('footer',['config',footerDirective]);

function footerDirective(config){
    return {
        restrict: 'E',
        templateUrl: 'app/themes/'+config.theme+'/footer/footer.html'
    };
}
