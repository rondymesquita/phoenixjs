angular.module('PhoenixCMS').directive('cmsComments',['config', comments]);

function comments(config){
    return {
        restrict: 'E',
        templateUrl: 'app/themes/'+config.theme+'/comments/comments.html'
    };
}
