
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

	afterEach(function(){

	});

    it("Should list post by given category", function() {

		var expectedPostsFromCategory = [{
	        "id": "3",
	        "title": "The Clone Wars",
	        "slug":"the-clone-wars",
			"url": "#/post/3/the-clone-wars",
	        "excerpt": "Don't be too proud of this technological terror you've constructed. The ability to destroy a planet is insignificant next to the power of the Force. All right. Well, take care of yourself, Han. I guess that's what you're best at, ain't it? Oh God, my uncle. How am I ever gonna explain this? Dantooine. They're on Dantooine. I call it luck.",
	        "image":"content/posts/images/starwars_the_clone_wars.jpg",
	        "categories": [
	            "star-wars", "the-clone-wars","animation"
	        ],
	        "tags":[
	            "turpis","basvitaeic"
	        ],
	        "author":"Rondy Mesquita",
	        "date":"January 28, 2015",
	        "type":"html"
	    }];

		var deferredPostService = $q.defer();
		deferredPostService.resolve(expectedPostsFromCategory);
		var spyPostService = spyOn(postService, 'listByCategory').and.returnValue(deferredPostService.promise);

		$routeParams.category = "animation";

		var $scope = $rootScope.$new();
		var postByCategoryController = controller('PostByCategoryController',{
			$scope: $scope,
			postService: postService,
			$routeParams: $routeParams
		});

		$scope.$apply();
		expect($scope.posts).toEqual(expectedPostsFromCategory);
		expect($scope.category).toEqual("animation");

    });

	it("Should list post by given category (2)", function() {

		var expectedPostsFromCategory = [{
			"id": "1",
			"title": "The Empire Strikes Back",
			"slug":"the-empire-strikes-back",
			"url":"#/post/1/the-empire-strikes-back",
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
		{
			"id": "2",
			"title": "A New Hope",
			"slug":"a-new-hope",
			"url":"#/post/2/a-new-hope",
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
		deferredPostService.resolve(expectedPostsFromCategory);
		var spyPostService = spyOn(postService, 'listByCategory').and.returnValue(deferredPostService.promise);

		$routeParams.category = "movies";

		var $scope = $rootScope.$new();
		var postByCategoryController = controller('PostByCategoryController',{
			$scope: $scope,
			postService: postService,
			$routeParams: $routeParams
		});

		$scope.$apply();
		expect($scope.posts).toEqual(expectedPostsFromCategory);
		expect($scope.category).toEqual("movies");

    });

});
