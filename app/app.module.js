angular
.module('PhoenixCMS', ['ngRoute','btford.markdown','angularUtils.directives.dirPagination'])
.run(function(){
    //console.log("Loaded");
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
    }
};

//Remove acentuation
function EncodeString(s){
    var r = s.toString().toLowerCase();
    non_asciis = {'a': '[àáâãäå]', 'ae': 'æ', 'c': 'ç', 'e': '[èéêë]', 'i': '[ìíîï]', 'n': 'ñ', 'o': '[òóôõö]', 'oe': 'œ', 'u': '[ùúûűü]', 'y': '[ýÿ]'};
    for (i in non_asciis) { r = r.replace(new RegExp(non_asciis[i], 'g'), i); }
    return r.toLowerCase();
};

// Generate a friendly url to post based on title
function GenerateFriendlyUrl(post){
    return post.title.replace(/ /g,"-").toLowerCase();
};
