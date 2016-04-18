
describe("PageViewControllerTest", function() {
	var pageViewController,
		$scope,
		$rootScope,
		$httpBackend,
		pageService,
		service,
		deferredService,
		deferredPageService,
		expectedPage = {
		        "id": "1",
		        "title": "About",
				"slug":"about",
				"url":"#page/1/about",
		        "author":"Rondy Mesquita",
		        "date":"January 28, 2015",
		        "type":"md"
		    },
		expectedPageContent = "Fake Page Content";

	beforeEach(function(){
		module('PhoenixJS');
	});

	beforeEach(inject(function(_$controller_, _$httpBackend_, _$rootScope_, _PageService_, _Service_ , $q){
		// The injector unwraps the underscores (_) from around the parameter names when matching
		controller = _$controller_;
		pageService = _PageService_;
		$httpBackend = _$httpBackend_;
		$rootScope = _$rootScope_;
		service = _Service_;

		deferredPageService = $q.defer();
		deferredPageService.resolve(expectedPage);
		spyOn(pageService, 'getById').and.returnValue(deferredPageService.promise);

		deferredService = $q.defer();
		deferredService.resolve(expectedPageContent);
		spyOn(service, 'get').and.returnValue(deferredService.promise);

		$scope = $rootScope.$new();
		pageViewController = controller('PageViewController',{
			$scope: $scope,
			pageService: pageService,
			service: service
		});

		$httpBackend
			.expectGET(/themes/)
			.respond();

	}));

    it("Should open page by its id", function() {
		// console.log($scope);
		$scope.$apply();

		expect($scope.page).toEqual(expectedPage);
		expect($scope.page.content).toEqual(expectedPageContent);
		expect($scope.$root.page).toEqual(expectedPage);
		expect(pageService.getById).toHaveBeenCalled();
		expect(service.get).toHaveBeenCalled();

    });

});
