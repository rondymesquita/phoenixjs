angular
.module('SmartschoolApp', ['ngRoute','ngTable'])
.run(function(){
    console.log("loaded");
}).config(function($httpProvider){
    $httpProvider.interceptors.push(interceptor);
});


var interceptor = function ($q, $location, constants) {
    return {
        request: function (request) {

            // if($.cookie(constants.usernameKey) == undefined){
            //     // console.log("Not logged");
            //     $("#authRequiredModal").find(".modal").modal("show");
            //
            // }else{
            //     // console.log("logged");
            //     request.headers[constants.authTokenKey] = $.cookie(constants.authTokenKey);
            //
            // }

            return request;
        },

        response: function (result) {
            // console.log('Repos:');
            // result.data.splice(0, 10).forEach(function (repo) {
            //     console.log(repo.name);
            // })
            // console.log("Result");
            // console.log(result);
            return result;
        },

        responseError: function (rejection) {
            // console.log('Failed with', rejection.status, 'status');
            // if (rejection.status == 403) {
            //     $location.url('/login');
            // }
            // console.log("Error");
            console.log(rejection);
            return $q.reject(rejection);
        }
    }
};


function ResponseData(message, status){
    this.message = message;
    this.status = status;
}
