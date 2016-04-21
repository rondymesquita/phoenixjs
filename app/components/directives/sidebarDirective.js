phoenix.directive('phxSidebar',['config', sidebarDirective]);

function sidebarDirective(config){
    return {
        restrict: 'E',
        replace: true,
        scope: true,
        templateUrl: 'app/themes/'+config.theme+'/sidebar/sidebar.html',
        compile: function(element, attrs){
            return function(scope, element, attrs){
                if (!attrs.body) {
                    attrs.body = 'sidebar-default.html';
                }
                scope.body = "app/themes/"+config.theme+"/sidebar/"+ attrs.body;
            };
        }
    };
}
