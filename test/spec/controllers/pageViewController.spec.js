
describe("PageViewControllerTest", function() {
	var pageViewController,
		$scope,
		$rootScope,
		$httpBackend,
		pageService,
		expectedPage ={
		        "id": "1",
		        "title": "About",
				"slug":"about",
				"url":"#page/1/about",
		        "author":"Rondy Mesquita",
		        "date":"January 28, 2015",
		        "type":"md"
		    };

	beforeEach(function(){
		module('PhoenixJS');
	});

	beforeEach(inject(function(_$controller_, _$httpBackend_, _$rootScope_, _PageService_){
		// The injector unwraps the underscores (_) from around the parameter names when matching
		controller = _$controller_;
		pageService = _PageService_;
		$httpBackend = _$httpBackend_;
		$rootScope = _$rootScope_;

		console.log(pageService);
		spyOn(pageService, 'getById').and.returnValue(expectedPage);

		$scope = $rootScope.$new();
		pageViewController = controller('PageViewController',{
			$scope:$scope,
			pageService: pageService
		});


	}));

    it("Should open page by its id", function() {
		console.log($scope);
		expect(pageService.getById).toHaveBeenCalled();
		expect(pageService.getById()).toEqual(expectedPage);

		pageService.getById();
		$scope.$digest();
		expect($scope.page).toEqual('');
		console.log($scope.page);

    });

});
