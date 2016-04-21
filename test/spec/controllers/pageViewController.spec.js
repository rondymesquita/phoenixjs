
describe("PageViewControllerTest", function() {
	var $scope,
		$rootScope,
		$httpBackend,
		$q,
		controller,
		pageService,
		service,
		expectedPage = {
		        "id": "1",
		        "title": "About",
				"slug":"about",
				"url":"#/page/1/about",
		        "author":"Rondy Mesquita",
		        "date":"January 28, 2015",
		        "type":"md"
		    },
		expectedPageContent = "Fake Page Content";

	beforeEach(function(){
		module('PhoenixJS');
	});

	beforeEach(inject(function(_$controller_, _$httpBackend_, _$rootScope_, _PageService_, _Service_ , _$q_){
		// The injector unwraps the underscores (_) from around the parameter names when matching
		controller = _$controller_;
		pageService = _PageService_;
		$httpBackend = _$httpBackend_;
		$rootScope = _$rootScope_;
		service = _Service_;
		$q = _$q_;

		$httpBackend
			.expectGET(/themes/)
			.respond();

	}));

	afterEach(function(){
		service.get.calls.reset();
		pageService.getById.calls.reset();
	});

    it("Should open page by its id", function() {
		var deferredPageService = $q.defer();
		deferredPageService.resolve(expectedPage);
		var spyPageService = spyOn(pageService, 'getById').and.returnValue(deferredPageService.promise);

		var deferredService = $q.defer();
		deferredService.resolve(expectedPageContent);
		var spyService = spyOn(service, 'get').and.returnValue(deferredService.promise);

		var $scope = $rootScope.$new();
		var pageViewController = controller('PageViewController',{
			$scope: $scope,
			pageService: pageService,
			service: service
		});

		$scope.$apply();

		expect($scope.page).toEqual(expectedPage);
		expect($scope.page.content).toEqual(expectedPageContent);
		expect($scope.$root.page).toEqual(expectedPage);
		expect(pageService.getById).toHaveBeenCalled();
		expect(service.get).toHaveBeenCalled();

		spyPageService.and.callThrough();
		spyService.and.callThrough();

    });

});
