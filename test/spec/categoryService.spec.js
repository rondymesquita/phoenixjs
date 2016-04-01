
describe("CategoryServiceTest", function() {
	var categoryService,
		$httpBackend;


	beforeEach(function(){
		module('PhoenixJS');
	});

	beforeEach(inject(function(_CategoryService_, _$httpBackend_, _$rootScope_){
		// The injector unwraps the underscores (_) from around the parameter names when matching
		categoryService = _CategoryService_;
		$httpBackend = _$httpBackend_;
		$rootScope = _$rootScope_;

	}));

	afterEach(function(){
		// $httpBackend.verifyNoOutstandingExpectation();
		// $httpBackend.verifyNoOutstandingRequest();
	});

    it("Should list all categories from posts", function(done) {

		$httpBackend
			.expectGET('content/posts/posts.json')
			.respond(expectedPosts);

		$httpBackend
			.expectGET('app/themes/rising/posts/list.html')
			.respond();

		categoryService.list(function(categories){
	        expect(expectedCategories).toEqual(categories);
			done();
	    });

		$httpBackend.flush();

    });

});
