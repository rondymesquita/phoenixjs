//create a console.log reporter
var MyReporter = function(){jasmineRequire.JsApiReporter.apply(this,arguments);};
MyReporter.prototype = jasmineRequire.JsApiReporter.prototype;
MyReporter.prototype.constructor = MyReporter;
MyReporter.prototype.specDone=function(o){
    o=o||{};
    if(o.status!=="passed"){
      //console.warn("Failed: " + o.fullName + " " + o.failedExpectations[0].message);
    }
};
var env = jasmine.getEnv();
env.addReporter(new MyReporter());
