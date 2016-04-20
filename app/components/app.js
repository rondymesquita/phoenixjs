var phoenix = angular.module('PhoenixJS', ['ngRoute','btford.markdown','angularUtils.directives.dirPagination'])
.run(function(){
    console.log("PhoenixJS Loaded");
}).config(function(paginationTemplateProvider, config){
    paginationTemplateProvider.setPath(config.pagTemplate);
});
