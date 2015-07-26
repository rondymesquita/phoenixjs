angular.module('PhoenixCMS').directive('comments',['config', comments]);

function comments(config){
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/themes/'+config.theme+'/comments/comments.html'
    };
}
