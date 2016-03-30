var Calculator = function(){
	/*
	function Calculator(property){
		this.property = property;
	}
	*/

	Calculator.prototype.sum = function(value1, value2){
		return value1 + value2;
	}

	Calculator.prototype.asyncSum = function(value1, value2){
		var deferred = $.Deferred();

		setTimeout(function(){
			deferred.resolve(value1 + value2);
		},3000);

		return deferred.promise();
	}

}

describe("Calculator", function() {
	jasmine.DEFAULT_TIMEOUT_INTERVAL = 10 * 1000;
	//console.log(jasmine);

    beforeEach(function() {
        calculator = new Calculator();
     });

    it("should sum two valid numbers", function() {
        expect(calculator.sum(1, 2)).toEqual(3);
    });

	it("should sum asyncronously two valid numbers", function(done) {
		calculator.asyncSum(1, 2).done(function(result){
			expect(result).toEqual(3);
			done(); //call done
		});

    });
});
