
describe("RoutesTest", function() {
	var $httpBackend,
		$route,
		$rootScope,
		config,
		configBackup;

	beforeEach(function(){
		phoenix = module('PhoenixJS');
	});

	beforeEach(inject(function( _$route_, _$rootScope_, _config_){

		$route = _$route_;
		$rootScope = _$rootScope_;
		config = _config_;
		config.indexPage = '';

	}));

	afterEach(function(){
		config = configBackup;
		// $httpBackend.verifyNoOutstandingExpectation();
		// $httpBackend.verifyNoOutstandingRequest();
	});

    it("Should have root route", function() {

		var rootRoute = $route.routes['/'];
		expect(rootRoute).toBeDefined();
		expect(rootRoute.controller).toEqual('PostListController');
		expect(rootRoute.templateUrl()).toContain('posts/list.html');
    });

	it("Should redirect to static page when configured", function() {

		//Set custom index page
		config.indexPage = 'custom_index.html';

		var rootRoute = $route.routes['/'];
		expect(rootRoute).toBeDefined();
		expect(rootRoute.controller).toEqual('PostListController');
		expect(rootRoute.templateUrl()).toContain('content/pages/static_pages/custom_index.html');
    });

	it("Should have route to view post", function() {

		var route = $route.routes['/post/:id/:title'];
		expect(route).toBeDefined();
		expect(route.controller).toEqual('PostViewController');
		expect(route.templateUrl()).toEqual('app/themes/' + config.theme + '/posts/view.html');
    });

	it("Should have route to list posts by category", function() {

		var route = $route.routes['/category/:category'];
		expect(route).toBeDefined();
		expect(route.controller).toEqual('PostByCategoryController');
		expect(route.templateUrl()).toEqual('app/themes/' + config.theme + '/posts/byCategory.html');
    });

	it("Should have route to list posts by search", function() {

		var route = $route.routes['/search/:search'];
		expect(route).toBeDefined();
		expect(route.controller).toEqual('PostBySearchController');
		expect(route.templateUrl()).toEqual('app/themes/' + config.theme + '/posts/bySearch.html');
    });

	it("Should have route to view page", function() {

		var route = $route.routes['/page/:id/:title'];
		expect(route).toBeDefined();
		expect(route.controller).toEqual('PageViewController');
		expect(route.templateUrl()).toEqual('app/themes/' + config.theme + '/pages/view.html');
    });

	it("Should have 404 route", function() {

		var route = $route.routes[null];
		expect(route).toBeDefined();
		expect(route.templateUrl).toEqual('app/themes/' + config.theme + '/pages/404.html');
    });

});
