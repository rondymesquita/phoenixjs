
describe("PostSearchControllerTest", function() {
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

	afterEach(function(){

	});

    it("Should list post by searching for title", function() {

		var expectedResultSearch = [{
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
		    }];

		var deferredPostService = $q.defer();
		deferredPostService.resolve(expectedResultSearch);
		var spyPostService = spyOn(postService, 'listBySearch').and.returnValue(deferredPostService.promise);

		$routeParams.search = "Empire";

		var $scope = $rootScope.$new();
		var ctrl = controller('PostBySearchController',{
			$scope: $scope,
			postService: postService,
			$routeParams: $routeParams
		});

		$scope.$apply();
		expect($scope.posts).toEqual(expectedResultSearch);
		expect($scope.search).toEqual("Empire");

    });

	it("Should list post by searching for category", function() {

		var expectedResultSearch = [{
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
	    }
	    ,
	    {
	        "id": "2",
	        "title": "A New Hope",
	        "slug":"a-new-hope",
			"url":"#post/2/a-new-hope",
	        "excerpt": "Look, I ain't in this for your revolution, and I'm not in it for you, Princess. I expect to be well paid. I'm in it for the money. I care. So, what do you think of her, Han? He is here. What?! I find your lack of faith disturbing. You are a part of the Rebel Alliance and a traitor! Take her away!",
	        "image":"content/posts/images/starwars_a_new_hope.jpg",
	        "categories": [
	            "star-wars", "a-new-hope","movies"
	        ],
	        "tags":[
	            "turpis","basvitaeic"
	        ],
	        "author":"Rondy Mesquita",
	        "date":"January 28, 2015",
	        "type":"md"
	    }];

		var deferredPostService = $q.defer();
		deferredPostService.resolve(expectedResultSearch);
		var spyPostService = spyOn(postService, 'listBySearch').and.returnValue(deferredPostService.promise);

		$routeParams.search = "Movies";

		var $scope = $rootScope.$new();
		var ctrl = controller('PostBySearchController',{
			$scope: $scope,
			postService: postService,
			$routeParams: $routeParams
		});

		$scope.$apply();
		expect($scope.posts).toEqual(expectedResultSearch);
		expect($scope.search).toEqual("Movies");

    });


});
