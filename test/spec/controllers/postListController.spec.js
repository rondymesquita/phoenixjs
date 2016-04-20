
describe("PostByCategoryControllerTest", function() {
	var $scope,
		$rootScope,
		$location,
		$httpBackend,
		$q,
		controller,
		postService,
		service,
		$routeParams;

	beforeEach(function(){
		module('PhoenixJS');
	});

	beforeEach(inject(function(_$controller_, _$httpBackend_, _$rootScope_, _PostService_, _$location_, _$q_, _$routeParams_){
		// The injector unwraps the underscores (_) from around the parameter names when matching
		controller = _$controller_;
		postService = _PostService_;
		$httpBackend = _$httpBackend_;
		$rootScope = _$rootScope_;
		$location = _$location_;
		$q = _$q_;
		$routeParams = _$routeParams_;

		$httpBackend
			.expectGET(/themes/)
			.respond();

	}));

    it("Should list all posts", function() {

		var deferredPostService = $q.defer();
		deferredPostService.resolve(posts);
		spyOn(postService, 'list').and.returnValue(deferredPostService.promise);

		var $scope = $rootScope.$new();
		var ctrl = controller('PostListController',{
			$scope: $scope,
			postService: postService
		});
		
		$scope.$apply();
		expect($scope.posts).toEqual(posts);

    });

});
