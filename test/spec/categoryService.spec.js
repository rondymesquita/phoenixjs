
describe("Test", function() {
	jasmine.DEFAULT_TIMEOUT_INTERVAL = 0.1 * 1000;
	var categoryService,
		$httpBackend;

	beforeEach(module('PhoenixCMS'));

	beforeEach(inject(function(_CategoryService_, _$httpBackend_){
		// The injector unwraps the underscores (_) from around the parameter names when matching
		categoryService = _CategoryService_;
		$httpBackend = _$httpBackend_;

	}));

	afterEach(function(){

	});

    it("should sum two valid numbers", function(done) {

		var categoriesExpected = ["star-wars", "the-empire-strikes-back", "movies", "a-new-hope", "the-clone-wars"];

		// console.log($httpBackend.expectGET('content/posts/posts.json'));
		$httpBackend.expectGET('content/posts/posts.json').call();
		$httpBackend.expectGET('app/themes/rising/posts/list.html').call();
		// $httpBackend.expect().respond();
		categoryService.list(function(categories){
	        expect(categories).toEqual(categoriesExpected);
			done();
	    });
		$httpBackend.flush();
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();

    });

});
