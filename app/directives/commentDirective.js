angular.module('PhoenixCMS').directive('comments',['config', comments]);

function comments(config){
    return {
        restrict: 'E',
        templateUrl: 'app/themes/'+config.theme+'/comments/comments.html',
        compile: function(element, attrs){
            return function(scope, element, attrs){
              // console.log(scope);
              // scope.intenseDebateAcct = config.intenseDebateAcct;
              // scope.intenseDebateId = "/post/"+scope.post.id+"/"+scope.post.url;
              // scope.intenseDebateUrl = "/post/"+scope.post.id+"/"+scope.post.url;
            }
        }
    };
}
