angular.module('PhoenixCMS').directive('cmsFooter',['config',footerDirective]);

function footerDirective(config){
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/themes/'+config.theme+'/footer/footer.html'
    };
}
