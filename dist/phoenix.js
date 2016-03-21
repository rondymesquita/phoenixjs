var phoenix = angular
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

phoenix.config(routesConfig);

function routesConfig($routeProvider, $locationProvider, config) {

    $routeProvider

    .when('/', {
        templateUrl : function(urlattr){
            if(config.indexPage){
                return 'content/pages/static_pages/'  + config.indexPage;
            }else{
                return 'app/themes/' + config.theme + '/posts/list.html';
            }

        },
        controller  : 'PostListController'
    })

    .when('/post/:id/:title', {
        templateUrl : function(urlattr){
            return 'app/themes/' + config.theme + '/posts/view.html';
        },
        controller  : 'PostViewController'
    })

    .when('/category/:category/', {
        templateUrl : function(urlattr){
            return 'app/themes/' + config.theme + '/posts/byCategory.html';
        },
        controller  : 'PostByCategoryController'
    })

    .when('/search/:search', {
        templateUrl : function(urlattr){
            return 'app/themes/' + config.theme + '/posts/bySearch.html'
        },
        controller  : 'PostBySearchController',
    })

    .when('/page/:name', {
        templateUrl : function(urlattr){
            console.log(urlattr);
            return 'app/themes/' + config.theme + '/pages/view.html'
        },
        controller  : 'PageViewController',
    })

    .otherwise({
        templateUrl : 'app/themes/' + config.theme + '/pages/404.html',
    });


}

phoenix.constant('config',{
    theme: 'rising', //theme folder name
    intenseDebateAcct: '4fb72a3cc0a3dd8ee583e406d41ddafe', //intenseDebate id
    pagTemplate: 'bower_components/angular-utils-pagination/dirPagination.tpl.html', // template for pagination
    pagItemsPerPage: 2, //how many itens per page
    //indexPage: 'custom_index.html', //if you want a custom index page, declare the page name here, otherwise, remove or comment the line

});

phoenix.constant('constants',{
    siteName: 'PhoenixJS',
    siteDescription: 'Simple CMS AngularJS Based',
    siteFooter: '2015 - Created by Rondy Mesquita - Powered by PhoenixJS and theme Rising',
    indexTitle: 'This is your custom index page',
    indexDescription: 'You can create a custom index page or use de default page listing your posts. Go to config.js file and configure it',



    searchResultTitle: 'Search results for: ',
    searchEmptyResultTitle: 'No result matches with search: ',
    category: 'Category: ',

    // Constants of Rising theme
    searchPlaceholder: 'Type your search and enter' ,
    search: 'Search',



});


phoenix.controller('IndexController', ['$scope', '$rootScope','$routeParams', '$location', 'config','constants', 'CategoryService','PostService', 'Service', indexController]);

function indexController ($scope, $rootScope, $routeParams, $location, config, constants, categoryService, postService, service) {

    $scope.location = $location;

    $scope.constants = constants;

    $scope.theme = config.theme;
    $scope.pagItemsPerPage = config.pagItemsPerPage;

    //Load categories
    categoryService.list(function(categories){
        $scope.categories = categories;
    });

    //Load menu
    service.get('content/menus/menu.json',function(data){
        $scope.menuLinks = data;
    });

    //Local Social
    service.get('content/social.json',function(data){
        $scope.social = data;
    });

    //Config menu navigation
    $scope.isActive = function(item) {
      if (item.url == "#"+$location.path()) {
        return true;
      }
      return false;
    };

    //Add Search support
    $scope.searchPosts = function(search){
        $location.path("/search/"+search);
    }

    //When page change, scrol to top
    $scope.pageChangeHandler = function(num) {
      window.scrollTo(0, 0);
    };

}


phoenix.controller('PageViewController', ['$scope', '$rootScope', '$http', '$routeParams','PageService','Service', pageViewController]);

function pageViewController($scope, $rootScope, $http, $routeParams, pageService, service) {

    $scope.page = [];
    $scope.routeParams = $routeParams;

    pageService.getByName($scope.routeParams.name, function(page){
        $scope.page = page;
        $rootScope.page = page;
        service.get('content/pages/' + $scope.routeParams.name + '.' + page.type, function(data, status){
          $scope.page.content = data;
        })
    });

}

phoenix.controller('PostByCategoryController', ['$scope', '$rootScope', '$http', '$routeParams','PostService', postByCategoryController]);

function postByCategoryController($scope, $rootScope, $http, $routeParams, postService) {

    $scope.title = "Posts";
    $scope.routeParams = $routeParams;

    postService.listByCategory($scope.routeParams.category, function(posts){
        console.log("By category post");
        $scope.posts = posts;
        $scope.category = $scope.routeParams.category;
    });



}


phoenix.controller('PostBySearchController', ['$scope', '$rootScope', '$http', '$routeParams','$location','PostService', postBySearchController]);

function postBySearchController($scope, $rootScope, $http, $routeParams, $location, postService) {

    $scope.title = "Search";
    $scope.post = [];
    $scope.routeParams = $routeParams;

    postService.getBySearch($scope.routeParams.search, function(posts){
            $scope.posts = posts;
            $scope.search = $scope.routeParams.search;
    })

}


phoenix.controller('PostListController', ['$scope', '$rootScope', '$http', '$routeParams','PostService', postListController]);

function postListController($scope, $rootScope, $http, $routeParams, postService) {

    $scope.title = "Posts";
    $scope.post = [];
    $scope.routeParams = $routeParams;

    postService.list(function(posts){
        $scope.posts = posts;
    });

}


phoenix.controller('PostViewController', ['$scope', '$rootScope', '$http', '$routeParams','config','PostService','Service', postViewController]);

function postViewController($scope, $rootScope, $http, $routeParams, config, postService, service) {

    $scope.title = "Posts";
    $scope.post = [];
    $scope.routeParams = $routeParams;

    postService.getById($scope.routeParams.id, function(post){
        $scope.post = post;
        $rootScope.post = post;
        service.get('content/posts/' + $scope.routeParams.id + '.' + post.type, function(data, status){
          $scope.post.content = data;
        });

        $scope.intenseDebateAcct = config.intenseDebateAcct;
        $scope.intenseDebateId = "/post/"+$scope.post.id+"/"+$scope.post.url;
        $scope.intenseDebateUrl = "/post/"+$scope.post.id+"/"+$scope.post.url;


    });

}

phoenix.directive('phxComments',['config', comments]);

function comments(config){
    return {
        restrict: 'E',
        templateUrl: 'app/themes/'+config.theme+'/comments/comments.html'
    };
}

phoenix.directive('phxFooter',['config',footerDirective]);

function footerDirective(config){
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/themes/'+config.theme+'/footer/footer.html'
    };
}

phoenix.directive('phxHeader',['config', headerDirective]);

function headerDirective(config){
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/themes/'+config.theme+'/header/header.html'
    };
}

phoenix.directive('phxMenu',['config','$sce', menuDirective]);

function menuDirective(config,$sce){
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/themes/'+config.theme+'/menus/menu.html',
        compile: function(element, attrs){
            return function(scope, element, attrs){
                scope.menuBody = "app/themes/"+config.theme+"/menus/"+ attrs['menuBody'];
            }
        }
    };
}

phoenix.directive('phxSidebar',['config', sidebarDirective]);

function sidebarDirective(config){
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/themes/'+config.theme+'/sidebar/sidebar.html'
    };
}


/*
 * Filter to list posts by category
 */
phoenix.filter('byCategory',byCategoryFilter);

function byCategoryFilter(config) {
  return function(data, category){
      var posts = [];
      posts = GetPostsByCategory(data, category);
      return posts;
  };
}


/*
 * Remove acentuation
 */
function EncodeString(s){
    var r = s.toString().toLowerCase();
    non_asciis = {'a': '[àáâãäå]', 'ae': 'æ', 'c': 'ç', 'e': '[èéêë]', 'i': '[ìíîï]', 'n': 'ñ', 'o': '[òóôõö]', 'oe': 'œ', 'u': '[ùúûűü]', 'y': '[ýÿ]'};
    for (i in non_asciis) { r = r.replace(new RegExp(non_asciis[i], 'g'), i); }
    return r.toLowerCase();
};

/*
 * Generate a friendly url to post based on title
 */
function GenerateFriendlyUrl(post){
    return post.title.replace(/ /g,"-").toLowerCase();
};

/*
 * Get posts by given json posts and category
 */
function GetPostsByCategory(posts, category){

    var result = [];

    $.each(posts, function(index, value){

        posts[index]["url"] = GenerateFriendlyUrl(posts[index]);

        for(var i = 0; i < posts[index].categories.length; i++){
            if(category === posts[index].categories[i]){
                result.push(posts[index]);
            }
        }

    });

  return result;
}

/*
 * Get posts by given json posts and id
 */
function GetPostById(posts, id){
    $.each(posts, function(index, value){
        posts[index]["url"] = GenerateFriendlyUrl(posts[index]);
    });
    return posts[id-1];
}

/*
 * Get posts by given json posts and search
 */
function GetPostsBySearch(posts, search){

    search = EncodeString(search);
    var result = [];

    //Each post
    $.each(posts, function(index, value){
        var insertThisPost = false;

        //Each post attribute
        $.each(posts[index], function(jndex, value){
            value = EncodeString(value);

            if(value.indexOf(search) != -1){
                insertThisPost = true;
                posts[index]["url"] = GenerateFriendlyUrl(posts[index]);
            }
        });

        if(insertThisPost)
            result.push(posts[index]);

    });

    return result;
}

/*
 * Get posts
 */
function GetPosts(posts, search){
    var result = [];
    $.each(posts, function(index, value){
        posts[index]["url"] = GenerateFriendlyUrl(posts[index]);
        result.push(posts[index]);
    });
    return result;
}

/*
 * Get categories list from posts
 */
function GetCategories(posts){
    var categories = [];
    $.each(posts, function(index, value){
        //get post categories
        for(var i = 0; i < posts[index].categories.length; i++){

            if($.inArray(posts[index].categories[i], categories) == -1){
                categories = categories.concat(posts[index].categories[i]);
            }
        }
    });
    return categories;
}

/*
 * Get page by given title
 */
function GetPageByTitle(pages, title){
    var page = {};
    $.each(pages, function(index, value){
        pages[index]["url"] = GenerateFriendlyUrl(pages[index]);

        if(title === pages[index]["url"]){
            page = pages[index];
            return false;
        }

    });
    return page;
}

phoenix.service('CategoryService', ['$http', 'config', categoryService]);

function categoryService($http, config) {

    var postsLocation = 'content/posts/posts.json';

    /*
     * List categories from all posts
     */
    this.list = function(callback){

        $http({
            method:'GET',
            url:  postsLocation,
            cache: true
        }).success(function (posts){
            console.log(posts);
            var categories = GetCategories(posts);
            callback(categories);
        });

    }

}

phoenix.service('PageService', ['$http', 'config', pageService]);

function pageService($http, config) {

    var pagesLocation = 'content/pages/pages.json';

    //Get a page by Id
    this.getByName= function(name, callback){

        $http({
            method:'GET',
            url: pagesLocation,
            cache: true
        }).success(function (pages){

            var page = GetPageByTitle(pages, name);
            callback(page);

        });

    }

}

phoenix.service('PostService', ['$http', 'config', postService]);

function postService($http, config) {

    var postsLocation = 'content/posts/posts.json';

    function Query(){
        this.posts = [];
        this.categories = [];
    }

    //List all posts
    this.list = function(callback){

        $http({
            method:'GET',
            url: postsLocation,
            cache: true
        }).success(function (data){

            var posts = GetPosts(data);
            callback(posts);

        });

    }

    //List all posts by givens string category
    this.listByCategory = function(category, callback){

        $http({
            method:'GET',
            url: postsLocation,
            cache: true
            }).success(function (data){
                var posts = GetPostsByCategory(data, category);
                callback(posts);
            });

    }

    //Get a post by Id
    this.getById = function(id, callback){

        $http({
            method:'GET',
            url: postsLocation,
            cache: true
        }).success(function (data){
            var post = GetPostById(data, id);
            callback(post);
        });

    }

    //Get a post by search
    //Search only in json file
    this.getBySearch = function(search, callback){

        var request = $http({
            method:'GET',
            url: postsLocation,
            cache: true,
        }).success(function(data){
            var posts = GetPostsBySearch(data, search);
            callback(posts);

        });

    }




}

phoenix.service('Service', ['$http', 'config', service]);

function service($http, config) {

    //Do a generic GET request
    this.get = function(url, success, error){

        $http({
            method:'GET',
            url: url,
            cache: true
        }).success(function (data, status){
            success(data, status);
        }).error(function(data, status){
            if(error){
                error(data, status);
            }
        });
    }   
}
