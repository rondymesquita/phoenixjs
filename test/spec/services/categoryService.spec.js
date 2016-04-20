
describe("CategoryServiceTest", function() {
	var categoryService,
		$httpBackend,
		$rootScope;

	beforeEach(function(){
		module('PhoenixJS');
	});

	beforeEach(inject(function(_CategoryService_, _$httpBackend_, _$rootScope_){
		// The injector unwraps the underscores (_) from around the parameter names when matching
		categoryService = _CategoryService_;
		$httpBackend = _$httpBackend_;
		$rootScope = _$rootScope_;

		$httpBackend
			.expectGET('content/posts/posts.json')
			.respond(posts);

		$httpBackend
			.expectGET(/themes/)
			.respond();

	}));

	afterEach(function(){
		// $httpBackend.verifyNoOutstandingExpectation();
		// $httpBackend.verifyNoOutstandingRequest();
	});

    it("Should list all categories from posts", function(done) {

		categoryService.list().then(function(result){
	        expect(categories).toEqual(result);
			done();
	    });

		$httpBackend.flush();

    });

});
