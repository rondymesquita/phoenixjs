angular.module('PhoenixCMS').directive('comments',['config', comments]);

function comments(config){
    return {
        restrict: 'E',
        templateUrl: 'app/themes/'+config.theme+'/comments/comments.html'
    };
}
