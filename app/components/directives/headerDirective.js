phoenix.directive('phxHeader',['config', headerDirective]);

function headerDirective(config){
    return {
        restrict: 'E',
        replace: true,
        scope: true,
        templateUrl: 'app/themes/'+config.theme+'/header/header.html',
        compile: function(element, attrs){
            return function(scope, element, attrs){
                if (!attrs.body) {
                    attrs.body = 'header-default.html';
                }
                scope.body = "app/themes/"+config.theme+"/header/"+ attrs.body;
            };
        }
    };
}
