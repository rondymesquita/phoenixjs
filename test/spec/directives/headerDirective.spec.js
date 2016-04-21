describe('HeaderDirectiveSpec', function() {
  var $compile,
      $rootScope;

  beforeEach(function(){
	  module('PhoenixJS');
  });

  beforeEach(inject(function(_$compile_, _$rootScope_){
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  it('Replaces the element with the appropriate content', function() {

    // var element = $compile("<phx-header></phx-header>")($rootScope.$new());
	//
    // $rootScope.$apply();
	//
    // expect(element.html()).toContain("lidless, wreathed in flame, 2 times");
  });
});
