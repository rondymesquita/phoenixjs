
describe("PostServiceTest", function() {
	var postService,
		$httpBackend;


	beforeEach(function(){
		module('PhoenixJS');
	});

	beforeEach(inject(function(_PostService_, _$httpBackend_, _$rootScope_){
		// The injector unwraps the underscores (_) from around the parameter names when matching
		postService = _PostService_;
		$httpBackend = _$httpBackend_;
		$rootScope = _$rootScope_;

	}));

	afterEach(function(){
		// $httpBackend.verifyNoOutstandingExpectation();
		// $httpBackend.verifyNoOutstandingRequest();
	});

    it("Should list all posts", function(done) {

		$httpBackend
			.expectGET('content/posts/posts.json')
			.respond(expectedPosts);

		$httpBackend
			.expectGET('app/themes/rising/posts/list.html')
			.respond();

		postService.list(function(posts){
			console.log(posts);
			console.log(expectedPosts);
	        expect(expectedPosts).toEqual(posts);
			done();
	    });

		$httpBackend.flush();

    });

});
