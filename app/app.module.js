angular
.module('PhoenixCMS', ['ngRoute','btford.markdown'])
.run(function(){
    //console.log("Loaded");
}).config(function($httpProvider){
    $httpProvider.interceptors.push(interceptor);
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

function EncodeString(s){
    var r = s.toString().toLowerCase();
    non_asciis = {'a': '[àáâãäå]', 'ae': 'æ', 'c': 'ç', 'e': '[èéêë]', 'i': '[ìíîï]', 'n': 'ñ', 'o': '[òóôõö]', 'oe': 'œ', 'u': '[ùúûűü]', 'y': '[ýÿ]'};
    for (i in non_asciis) { r = r.replace(new RegExp(non_asciis[i], 'g'), i); }
    return r.toLowerCase();
};
