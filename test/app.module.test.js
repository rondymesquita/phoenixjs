var phoenix = angular
.module('PhoenixCMS', ['ngRoute','btford.markdown','angularUtils.directives.dirPagination','ngMockE2E'])
.run(function($httpBackend){


	// $httpBackend.whenGET(/\.html$/).passThrough();
	// $httpBackend.whenGET(/\.json$/).passThrough();

	// $httpBackend.whenGET(/\.html$/).respond({status: 200});
	// $httpBackend.whenGET(/\.json$/).respond({status: 200});


}).config(function($httpProvider, paginationTemplateProvider, config){
    paginationTemplateProvider.setPath(config.pagTemplate);
});
