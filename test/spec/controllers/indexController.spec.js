
describe("IndexControllerSpec", function() {
	var	indexController,
		controller,
		postService,
		categoryService,
		service,
		deferredService,
		$httpBackend,
		$rootScope,
		$scope,
		$location;

	beforeEach(function(){
		module('PhoenixJS');
	});

	beforeEach(inject(function(_$controller_, _$httpBackend_, _$rootScope_, _PostService_, _CategoryService_, _Service_, _$location_, $q){
		// The injector unwraps the underscores (_) from around the parameter names when matching
		controller = _$controller_;
		postService = _PostService_;
		categoryService = _CategoryService_;
		$httpBackend = _$httpBackend_;
		$rootScope = _$rootScope_;
		service = _Service_;
		$location = _$location_;

		deferredCategoryService = $q.defer();
		deferredCategoryService.resolve(categories);
		spyOn(categoryService, 'list').and.returnValue(deferredCategoryService.promise);

		spyOn(service,'get').and.callFake(function(url){
			deferredService = $q.defer();
			var fakes = {
				'content/menus/menu.json': menu
			};
			deferredService.resolve(fakes[url]);
			return deferredService.promise;
		});

		$scope = $rootScope.$new();
		indexController = controller('IndexController',{
			$scope: $scope,
			postService: postService,
			categoryService: categoryService,
			service: service
			// ,$location: $location
		});

		$httpBackend
			.expectGET(/themes/)
			.respond();

	}));

    it("Should be defined required scope variables", function() {
		$scope.$apply();
		expect($scope.location).toBeDefined();
		expect($scope.constants).toBeDefined();
		expect($scope.theme).toBeDefined();
		expect($scope.pagItemsPerPage).toBeDefined();
    });

	it('Should load categories',function(){
		$scope.$apply();
		expect($scope.categories).toEqual(categories);
	});

	it('Should load menu links',function(){
		$scope.$apply();
		expect($scope.menu).toEqual(menu);
	});

	it('Should indicate if element href matches with current path',function(){
		$scope.$apply();
		var item = {
			url : '#/page/1/sample'
		};

		//verify if item is not active
		expect($scope.isActive(item)).toEqual(false);

		//changing location
		$location.path('/page/1/sample');

		//verify if item is active
		expect($scope.isActive(item)).toEqual(true);

	});

	it('Should indicate if element href matches with current path (2)',function(){
		$scope.$apply();
		var item = {
			url : '#/post/2/a-new-hope'
		};

		//verify if item is not active
		expect($scope.isActive(item)).toEqual(false);

		//changing location
		$location.path('/post/2/a-new-hope');

		//verify if item is active
		expect($scope.isActive(item)).toEqual(true);

	});

	it('Should indicate if element href matches with current path (3)',function(){
		$scope.$apply();
		var item = {
			url : '#/category/star-wars'
		};

		//verify if item is not active
		expect($scope.isActive(item)).toEqual(false);

		//changing location
		$location.path('/category/star-wars');

		//verify if item is active
		expect($scope.isActive(item)).toEqual(true);

	});

	it('Should change location path (redirection) when do a search',function(){
		$scope.searchPosts('search sample')
		expect($location.path()).toEqual('/search/search sample');

		$scope.searchPosts('another search')
		expect($location.path()).toEqual('/search/another search');
	});

});
