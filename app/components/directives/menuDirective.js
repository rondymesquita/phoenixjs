phoenix.directive('phxMenu',['config','$sce', menuDirective]);

function menuDirective(config,$sce){
    return {
        restrict: 'E',
        replace: true,
        scope: true,
        templateUrl: 'app/themes/'+config.theme+'/menu/menu.html',
        compile: function(element, attrs){
            return function(scope, element, attrs){
                if (!attrs.body) {
                    attrs.body = 'menu-default.html';
                }
                scope.body = "app/themes/"+config.theme+"/menu/"+ attrs.body;
            };
        }
    };
}
