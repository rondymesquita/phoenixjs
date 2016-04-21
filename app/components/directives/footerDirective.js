phoenix.directive('phxFooter',['config',footerDirective]);

function footerDirective(config){
    return {
        restrict: 'E',
        replace: true,
        scope: true,
        templateUrl: 'app/themes/'+config.theme+'/footer/footer.html',
        compile: function(element, attrs){
            return function(scope, element, attrs){
                if (!attrs.body) {
                    attrs.body = 'footer-default.html';
                }
                scope.body = "app/themes/"+config.theme+"/footer/"+ attrs.body;
            };
        }
    };
}
