var phoenix = angular.module('PhoenixJS', ['ngRoute','btford.markdown','angularUtils.directives.dirPagination'])
.run(function(){
    console.log("PhoenixJS Loaded");
}).config(function($httpProvider, paginationTemplateProvider, config){
    $httpProvider.interceptors.push(interceptor);
    paginationTemplateProvider.setPath(config.pagTemplate);
});

var interceptor = function ($q, $location) {
    return {
        request: function (request) {
            return request;
        },
        response: function (result) {
            return result;
        },

        responseError: function (rejection) {
            return $q.reject(rejection);
        }
    };
};