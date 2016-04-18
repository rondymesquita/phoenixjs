
describe("PostViewControllerTest", function() {
	var postViewController,
		$scope,
		$rootScope,
		$httpBackend,
		postService,
		service,
		deferredService,
		deferredPostService,
		expectedPost = {
	        "id": "1",
	        "title": "The Empire Strikes Back",
	        "slug":"the-empire-strikes-back",
			"url":"#post/1/the-empire-strikes-back",
	        "excerpt": "Don't be too proud of this technological terror you've constructed. The ability to destroy a planet is insignificant next to the power of the Force. Remember, a Jedi can feel the Force flowing through him. Look, I ain't in this for your revolution, and I'm not in it for you, Princess. I expect to be well paid.",
	        "image":"content/posts/images/starwars_the_empire_strikes_back.jpg",
	        "categories": [
	            "star-wars", "the-empire-strikes-back","movies"
	        ],
	        "tags":[
	            "lorem","ipsum"
	        ],
	        "author":"Rondy Mesquita",
	        "date":"January 28, 2015",
	        "type":"md"
	    },
		expectedPostContent = "Fake Post content";

	beforeEach(function(){
		module('PhoenixJS');
	});

	beforeEach(inject(function(_$controller_, _$httpBackend_, _$rootScope_, _PostService_, _Service_ , $q){
		// The injector unwraps the underscores (_) from around the parameter names when matching
		controller = _$controller_;
		postService = _PostService_;
		$httpBackend = _$httpBackend_;
		$rootScope = _$rootScope_;
		service = _Service_;

		deferredPostService = $q.defer();
		deferredPostService.resolve(expectedPost);
		spyOn(postService, 'getById').and.returnValue(deferredPostService.promise);

		deferredService = $q.defer();
		deferredService.resolve(expectedPostContent);
		spyOn(service, 'get').and.returnValue(deferredService.promise);

		$scope = $rootScope.$new();
		postViewController = controller('PostViewController',{
			$scope: $scope,
			postService: postService,
			service: service
		});

		$httpBackend
			.expectGET(/themes/)
			.respond();

	}));

    it("Should open post by its id", function() {
		// console.log($scope);
		$scope.$apply();
		console.log($scope);
		expect($scope.post).toEqual(expectedPost);
		expect($scope.post.content).toEqual(expectedPostContent);
		expect($scope.$root.post).toEqual(expectedPost);
		expect(postService.getById).toHaveBeenCalled();
		expect(service.get).toHaveBeenCalled();

    });

});
