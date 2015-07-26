angular.module('PhoenixCMS').directive('cmsMenu',['config','$sce', menuDirective]);

function menuDirective(config,$sce){
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/themes/'+config.theme+'/menus/menu.html',
        compile: function(element, attrs){
            return function(scope, element, attrs){
                scope.menuBody = "app/themes/"+config.theme+"/menus/"+ attrs['menuBody'];
            }
        }
    };
}
