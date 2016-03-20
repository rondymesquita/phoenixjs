var phoenix = angular
.module('PhoenixCMS', ['ngRoute','btford.markdown','angularUtils.directives.dirPagination','ngMockE2E'])
.run(function($httpBackend){


	$httpBackend.whenGET(/\.html$/).passThrough();
	$httpBackend.whenGET(/\.json$/).passThrough();

	// $httpBackend.whenGET(/\.html$/).respond({status: 200});
	// $httpBackend.whenGET(/\.json$/).respond({status: 200});


}).config(function($httpProvider, paginationTemplateProvider, config){
    //$httpProvider.interceptors.push(interceptor);
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
    }
};
