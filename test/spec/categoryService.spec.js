
describe("Test", function() {
	jasmine.DEFAULT_TIMEOUT_INTERVAL = 10 * 1000;
	//console.log(jasmine);

	beforeEach(module('PhoenixCMS'));

	var $service;

	beforeEach(inject(function(_$service){
		// The injector unwraps the underscores (_) from around the parameter names when matching
		$service = _$service;
	}));

    it("should sum two valid numbers", function() {
        expect(calculator.sum(1, 2)).toEqual(3);
    });

});
